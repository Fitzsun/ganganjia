const config = require('configModule');
const noJquery = require('withoutJqueryModule');
const content = require('./content.ejs');
const layout = require('layout');
const dirsConfig = config.DIRS;

const kingDesignHtml = require('./content.ejs')({
  constructInsideUrl: noJquery.constructInsideUrl,
});
const renderData = Object.assign({}, dirsConfig, { kingDesignHtml });

module.exports = layout.init({
  pageTitle: '设计国度',
}).run(content(renderData));
