var React = require("./../../../node_modules/react"),
    Fluxxor = require("./../../../node_modules/fluxxor"), 
    _ = require("./../../../node_modules/mori");

var Application = require("./components/Application/component"),
    Stores = require("./stores"),
    Actions = require("./actions");

window.React = React;
window._ = _;

var flux = new Fluxxor.Flux(Stores, Actions);
window.flux = flux;
window.Application = Application;

React.renderComponent(<Application flux ={flux} />, document.getElementById("app"));