var PagesStore = require("./stores/pagesStore");
var PageDataStore = require("./stores/pageDataStore");
module.exports = {
  PagesStore: new PagesStore(),
  PageDataStore: new PageDataStore()
};