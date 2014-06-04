var Fluxxor = require("./../../../../node_modules/fluxxor");
var Constants = require("./../constants");
var _ = require("./../../../../node_modules/mori");
var PagesStore = Fluxxor.createStore({
  initialize: function (options) {
    this.currentPageIndex = options.currentPageIndex || 0;
    this.totalPages = options.totalPages || 0;
    this.pages = _.list();
    this.bindActions(Constants.actions.ADD_PAGE, this.handleAddPage);
    this.bindActions(Constants.actions.MOVE_PAGE, this.handleMovePage);
    this.bindActions(Constants.actions.SELECT_PAGE, this.handleSelectPage);
  },

  getState: function() {
    return {
      currentPage: this.currentPageIndex,
      totalPages: this.totalPages,
      pages: this.pages
    };
  },

  handleAddPage: function(payload) {
    this.totalPages = this.totalPages + 1;
    this.currentPageIndex = this.totalPages;
    var datum = {page: "Original page " + this.currentPageIndex, totalPages: this.totalPages};
    this.pages = _.pipeline(
      this.pages,
      _.partial(_.map, function(i) {
        return {
          page: i.page,
          totalPages: i.totalPages + 1
        };
      }),
      _.curry(_.conj, datum)
    );
    this.emit("change");
  },

  handleMovePage: function(payload) {
    this.currentPageIndex = payload.index + 2;
    var index = this.totalPages - payload.index;
    var chopIndex = index ;
    if(payload.direction === Constants.direction.UP) {
      chopIndex = index;
      index = index + 1;
      this.currentPageIndex = this.currentPageIndex - 2;
    } else {
      chopIndex = index - 1;
      index = index;
    }
    var chopPage = _.last(_.take(chopIndex, this.pages));
    var page = _.last(_.take(index, this.pages));
    var head = _.take(chopIndex - 1, this.pages);
    var tail = _.drop(index, this.pages);
    var builtTail = _.conj(tail, chopPage, page);
    this.pages = _.concat(head, builtTail);
    this.emit("change");
  },

  handleSelectPage: function(payload) {
    this.currentPageIndex = payload.index + 1;
    this.emit("change");
  }
});

module.exports = PagesStore;