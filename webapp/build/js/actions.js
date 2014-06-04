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
  },
  selectPage: function(index) {
    this.dispatch(Constants.actions.SELECT_PAGE, {
      index: index
    });
  },
  changeMenu: function(menuState) {
    this.dispatch(Constants.actions.CHANGE_MENU, {
      menuState: menuState
    });
  }
};