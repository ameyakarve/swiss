var React = require("./../../../../../node_modules/react"),
    Render = require("./render.jsx"),
    Fluxxor = require("./../../../../../node_modules/fluxxor"),
    FluxChildMixin = Fluxxor.FluxChildMixin(React);

var EditMedia = React.createClass({
  mixins: [FluxChildMixin],
  render: Render
});

module.exports = EditMedia;
