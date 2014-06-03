var Fluxxor = require("./../fluxxor");
var Constants = require("./../constants");
var _ = require("./../mori");
var PagesStore = Fluxxor.createStore({
  initialize: function (options) {
    this.currentPage = options.currentPage || 0;
    this.totalPages = options.totalPages || 0;
    this.pages = _.list();
    this.bindActions(Constants.actions.ADD_PAGE, this.handleAddPage);
    this.bindActions(Constants.actions.MOVE_PAGE, this.handleMovePage);
  },

  getState: function() {
    return {
      currentPage: this.currentPage,
      totalPages: this.totalPages,
      pages: this.pages
    };
  },

  handleAddPage: function(payload) {
    this.totalPages = this.totalPages + 1;
    this.currentPage = this.totalPages;
    var datum = {page: "Original page " + this.currentPage, totalPages: this.totalPages};
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
    var index = this.totalPages - payload.index;
    var chopIndex = index ;
    if(payload.direction === Constants.direction.UP) {
      chopIndex = index;
      index = index + 1;

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
  }
});

module.exports = PagesStore;