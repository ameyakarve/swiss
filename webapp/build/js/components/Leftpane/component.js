var React = require("./../../../../../node_modules/react"),
    Render = require("./render.jsx"),
    Fluxxor = require("./../../../../../node_modules/fluxxor"),
    FluxChildMixin = Fluxxor.FluxChildMixin(React);

var Page = require("./../Page/component");
window.Page = Page;

var Leftpane = React.createClass({
  mixins: [FluxChildMixin],
  addPage: function() {
    this.getFlux().actions.addPage();
  },
  movePage: function(direction, index) {
    this.getFlux().actions.movePage(direction, index);
  },
  movePageUp: function(index) {
    this.movePage(Constants.direction.UP,index);
  },
  movePageDown: function(index) {
    this.movePage(Constants.direction.DOWN, index);
  },
  render: Render
});
module.exports = Leftpane;