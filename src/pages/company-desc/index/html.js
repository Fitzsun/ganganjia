const config = require('configModule');
const noJquery = require('withoutJqueryModule');
const content = require('./content.ejs');
const layout = require('layout');
const dirsConfig = config.DIRS;

const companyDescHtml = require('./content.ejs')({
  constructInsideUrl: noJquery.constructInsideUrl,
});
const renderData = Object.assign({}, dirsConfig, { companyDescHtml });

module.exports = layout.init({
  pageTitle: '公司简介',
}).run(content(renderData));
