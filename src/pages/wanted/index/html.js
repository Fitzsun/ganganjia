const config = require('configModule');
const noJquery = require('withoutJqueryModule');
const content = require('./content.ejs');
const layout = require('layout');
const dirsConfig = config.DIRS;

const wantedHtml = require('./content.ejs')({
  constructInsideUrl: noJquery.constructInsideUrl,
});
const renderData = Object.assign({}, dirsConfig, { wantedHtml });

module.exports = layout.init({
  pageTitle: '人才招聘',
}).run(content(renderData));
