var React = require("./react"),
    Fluxxor = require("./fluxxor");

var Application = require("./components/Application/component"),
    Stores = require("./stores"),
    Actions = require("./actions");

window.React = React;

var flux = new Fluxxor.Flux(Stores, Actions);
window.flux = flux;
window.Application = Application;

React.renderComponent(<Application flux ={flux} />, document.getElementById("app"));