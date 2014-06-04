var Fluxxor = require("./../../../../node_modules/fluxxor");
var Constants = require("./../constants");
var _ = require("./../../../../node_modules/mori");

var PageDataStore = Fluxxor.createStore({
  initialize: function(options) {
    this.currentPageIndex = 0;
    this.totalPages = 0;
    this.menuState = {
      topLevel: true,
      editPage: false,
      editMedia: false,
      pickLayout: false,
      addMedia: false
    };
    this.currentPage = {
      blank: true
    };
    this.pages = _.list();
    this.bindActions(Constants.actions.ADD_PAGE, this.handleAddPage);
    this.bindActions(Constants.actions.SELECT_PAGE, this.handleSelectPage);
    this.bindActions(Constants.actions.CHANGE_MENU, this.handleMenuChange);
  },

  getState: function() {
    return {
      pageData: this.currentPage,
      menuState: this.menuState
    };
  },

  handleAddPage: function(payload) {
    var page = {
      columns: 3,
      mediaTop: _.list(),
      mediaBottom: _.list()
    };
    if(this.totalPages > 0) {
    var head = _.take(this.currentPageIndex - 1,this.pages);
    var tail = _.drop(this.currentPageIndex, this.pages);
    var builtTail = _.conj(this.pages, this.currentPage);
      this.pages = _.concat(head, builtTail);
    }
    this.totalPages = this.totalPages + 1;
    this.currentPageIndex = this.totalPages;
    this.currentPage = page;
    this.pages = _.conj(this.pages, page);
    this.emit("change");
  },

  handleSelectPage: function(payload) {
    this.currentPageIndex = payload.index + 1;
    this.emit("change");
  },

  handleMenuChange: function(payload) {
    this.menuState = {
      topLevel: false,
      editPage: false,
      editMedia: false,
      pickLayout: false,
      addMedia: false
    };
    if(payload.menuState === Constants.menuStates.TOP_LEVEL) {
      this.menuState.topLevel = true;
    } else if(payload.menuState === Constants.menuStates.PAGE_LAYOUT) {
      this.menuState.pickLayout = true;
    } else if(payload.menuState === Constants.menuStates.PAGE_MEDIA) {
      this.menuState.editMedia = true;
    }

    this.emit("change");
  }
});

module.exports = PageDataStore;