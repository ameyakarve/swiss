var React = require("./../../../../../node_modules/react"),
    Render = require("./render.jsx"),
    Fluxxor = require("./../../../../../node_modules/fluxxor"),
    FluxChildMixin = Fluxxor.FluxChildMixin(React);

var AddMedia = React.createClass({
  mixins: [FluxChildMixin],
  render: Render
});

module.exports = AddMedia;
