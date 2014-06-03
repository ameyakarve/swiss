var React = require("./../../react"),
    Fluxxor = require("./../../fluxxor"),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin,
    Render = require("./render.jsx");

var Navbar = require("./../Navbar/component"),
    Leftpane = require("./../Leftpane/component"),
    Rightpane = require("./../Rightpane/component");

window.Navbar = Navbar;
window.Leftpane = Leftpane;
window.Rightpane = Rightpane;

var Application = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("PagesStore")],

  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
      pages: flux.store("PagesStore").getState()
    };
  },

  render: Render
});

module.exports = Application;