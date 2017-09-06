const content = require('./content.ejs');
const layout = require('layout');

module.exports = layout.init({
  pageTitle: '感感佳',
}).run(content());
