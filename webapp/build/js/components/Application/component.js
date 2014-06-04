var React = require("./../../../../../node_modules/react"),
    Fluxxor = require("./../../../../../node_modules/fluxxor"),
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
  mixins: [FluxMixin, StoreWatchMixin("PagesStore", "PageDataStore")],

  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
      pages: flux.store("PagesStore").getState(),
      pageData: flux.store("PageDataStore").getState()
    };
  },

  render: Render
});

module.exports = Application;