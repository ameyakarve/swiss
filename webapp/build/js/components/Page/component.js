var React = require("./../../react"),
    Render = require("./render.jsx"),
    Fluxxor = require("./../../fluxxor"),
    FluxChildMixin = Fluxxor.FluxChildMixin(React);

var Constants = require("./../../constants");
var Page = React.createClass({
  mixins: [FluxChildMixin],
  addPage: function() {
    this.getFlux().actions.addPage();
  },
  movePage: function(direction) {
    console.log("Moved");
    this.getFlux().actions.movePage(direction, this.props.index);
  },
  movePageUp: function() {
    console.log("Moved Up");
    this.movePage(Constants.direction.UP);
  },
  movePageDown: function() {
    console.log("Moved Down");
    this.movePage(Constants.direction.DOWN);
  },
  render: Render
});
module.exports = Page;