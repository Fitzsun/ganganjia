const config = require('configModule');
const noJquery = require('withoutJqueryModule');
const content = require('./content.ejs');
const layout = require('layout');
const dirsConfig = config.DIRS;

const cotactUsHtml = require('./content.ejs')({
  constructInsideUrl: noJquery.constructInsideUrl,
});
const renderData = Object.assign({}, dirsConfig, { cotactUsHtml });

module.exports = layout.init({
  pageTitle: '联系我们',
}).run(content(renderData));
