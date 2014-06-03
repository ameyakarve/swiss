var Fluxxor = require("./../fluxxor");
var Constants = require("./../constants");

var PagesStore = Fluxxor.createStore({
  initialize: function (options) {
    this.currentPage = options.currentPage || 0;
    this.totalPages = options.totalPages || 1;
    this.bindActions(Constants.actions.ADD_PAGE, this.handleAddPage);
  },

  getState: function() {
    return {
      currentPage: this.currentPage,
      totalPages: this.totalPages
    };
  },

  handleAddPage: function(payload) {
    this.totalPages = this.totalPages + 1;
    this.emit("change");
  }
});

module.exports = PagesStore;