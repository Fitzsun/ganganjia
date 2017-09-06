require('./news.less');
require('lessDir/base.less');
const config = require('configModule');

$(() => {
  /* global IS_PRODUCTION:true */ // 由于ESLint会检测没有定义的变量，因此需要这一个`global`注释声明IS_PRODUCTION是一个全局变量(当然在本例中并不是)来规避warning
  if (!IS_PRODUCTION) {
    console.log('如果你看到这个Log，那么这个版本实际上是开发用的版本');
    console.log(config.API_ROOT);
  }
  $('.list-item').on('click', 'li', function() {
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index();
    $('.news>div').eq(index).addClass('show').siblings().removeClass('show');
    // 点击的同时发起ajax异步请求
    $.ajax({
      type: 'get',
      url: '',
      success: function(data) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
          var obj = data[i];
          html += `
          ${obj}
          `;
        }
        $('.news').html(html);
      },
    });
  });
});
