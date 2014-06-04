var React = require("./../../../../../node_modules/react"),
    Render = require("./render.jsx"),
    Fluxxor = require("./../../../../../node_modules/fluxxor"),
    FluxChildMixin = Fluxxor.FluxChildMixin(React);
    
var Pagedisplay = require("./../Pagedisplay/component"),
    Pageeditor = require("./../Pageeditor/component");

window.Pagedisplay = Pagedisplay;
window.Pageeditor = Pageeditor;

var Rightpane = React.createClass({
  mixins: [FluxChildMixin],
  render: Render
});

module.exports = Rightpane;