var Constants = require("./constants");

module.exports = {
  addPage: function() {
    this.dispatch(Constants.actions.ADD_PAGE);
  }
};