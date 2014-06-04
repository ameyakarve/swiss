var React = require("./../../../../../node_modules/react"),
    Render = require("./render.jsx"),
    Fluxxor = require("./../../../../../node_modules/fluxxor"),
    FluxChildMixin = Fluxxor.FluxChildMixin(React);

var Constants = require("./../../constants");
var Page = React.createClass({
  mixins: [FluxChildMixin],
  addPage: function() {
    this.getFlux().actions.addPage();
  },
  movePage: function(direction) {
    this.getFlux().actions.movePage(direction, this.props.index);
  },
  movePageUp: function(event) {
    this.movePage(Constants.direction.UP);
    event.stopPropagation();
  },
  movePageDown: function(event) {
    console.log("Moved Down");
    this.movePage(Constants.direction.DOWN);
    event.stopPropagation();
  },
  selectPage: function() {
    this.getFlux().actions.selectPage(this.props.index);
  },
  render: Render
});
module.exports = Page;