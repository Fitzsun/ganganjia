require('./king.less');
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
    var href = $(this).children().attr('href');
    $.ajax({
      type: 'get', // default
      async: true, // default
      url: 'href',
      success: function(data) {
        console.log(href);
        // $('.tab-content').html(data);
        // 如果是对象数组的话
        var html = '';
        for (var i = 0; i < data.length; i++) {
          var obj = data[i];
          html += `
          <ul class="list-news">
            <li>
              <div class="pull-left">
                <img src="<%= require('${obj.value}') %>" alt="">
              </div>
              <div class="">
                <span>感感佳受邀出席北京峰会</span>
                <p>北京峰会是设计界的高端会议，国务院副总理，国务院相关领导，北</p>
                <a href="#"><img src="<%= require('${obj.path}') %>" alt=""></a>
              </div>
            </li>
          <ul>`;
        }
        $('.tab-content').html(html);
      },
    });
  });
});
