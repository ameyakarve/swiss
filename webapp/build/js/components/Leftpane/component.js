var React = require("./../../react"),
    Render = require("./render.jsx"),
    Fluxxor = require("./../../fluxxor"),
    FluxChildMixin = Fluxxor.FluxChildMixin(React);

var Page = require("./../Page/component");
window.Page = Page;

var Leftpane = React.createClass({
  mixins: [FluxChildMixin],
  addPage: function(payload) {
    this.getFlux().actions.addPage();
  },
  render: Render
});
module.exports = Leftpane;