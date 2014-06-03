var Constants = require("./constants");

module.exports = {
  addPage: function() {
    this.dispatch(Constants.actions.ADD_PAGE);
  },
  movePage: function(direction, index) {
    this.dispatch(Constants.actions.MOVE_PAGE, {
      direction: direction,
      index: index
    });
  }
};