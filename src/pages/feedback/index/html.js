const config = require('configModule');
const noJquery = require('withoutJqueryModule');
const content = require('./content.ejs');
const layout = require('layout');
const dirsConfig = config.DIRS;

const feedbackHtml = require('./content.ejs')({
  constructInsideUrl: noJquery.constructInsideUrl,
});
const renderData = Object.assign({}, dirsConfig, { feedbackHtml });

module.exports = layout.init({
  pageTitle: '留言与反馈',
}).run(content(renderData));
