var React = require("./../../../../../node_modules/react"),
    Render = require("./render.jsx"),
    Fluxxor = require("./../../../../../node_modules/fluxxor"),
    FluxChildMixin = Fluxxor.FluxChildMixin(React);

var EditPage = require("./../EditPage/component"),
    EditMedia = require("./../EditMedia/component"),
    AddMedia = require("./../AddMedia/component"),
    LayoutPicker = require("./../LayoutPicker/component"),
    TopLevelMenu = require("./../TopLevelMenu/component");

window.EditPage = EditPage;
window.EditMedia = EditMedia;
window.AddMedia = AddMedia;
window.LayoutPicker = LayoutPicker;
window.TopLevelMenu = TopLevelMenu;

var Pageeditor = React.createClass({
  mixins: [FluxChildMixin],
  render: Render
});

module.exports = Pageeditor;