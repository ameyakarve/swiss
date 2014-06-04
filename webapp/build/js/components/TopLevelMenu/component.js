var React = require("./../../../../../node_modules/react"),
    Render = require("./render.jsx"),
    Fluxxor = require("./../../../../../node_modules/fluxxor"),
    FluxChildMixin = Fluxxor.FluxChildMixin(React),
    Constants = require("./../../constants");

var TopLevelMenu = React.createClass({
  mixins: [FluxChildMixin],
  render: Render,
  selectPageLayout: function() {
    this.getFlux().actions.changeMenu(Constants.menuStates.PAGE_LAYOUT);
    console.log("HERE!");
  },
  selectPageMedia: function() {
    this.getFlux().actions.changeMenu(Constants.menuStates.PAGE_MEDIA);
  }
});

module.exports = TopLevelMenu;
