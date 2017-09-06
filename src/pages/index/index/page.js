// require('cp');
// require('lessDir/base-dir/index.less');
require('lessDir/base.less');
require('./page.less');
const config = require('configModule');

$(() => {
  /* global IS_PRODUCTION:true */ // 由于ESLint会检测没有定义的变量，因此需要这一个`global`注释声明IS_PRODUCTION是一个全局变量(当然在本例中并不是)来规避warning
  if (!IS_PRODUCTION) {
    console.log('如果你看到这个Log，那么这个版本实际上是开发用的版本');
    console.log(config.API_ROOT);
  }
  console.log($);
  var floatingHeight = 0;
  var floatingTop = 0;
  var a = document.getElementById('floating');
  // var b = document.getElementsByClassName("successful-cases")[0];
  // console.log(b.offsetTop);
  // console.log($(".successful-cases")[0].offsetTop);
  function positionFloating() {
    // 获取页脚的高度
    floatingHeight = $('#floating ul').height();
    // console.log(floatingHeight);
    // 获取页脚的高度
    /*

      scrollTop() 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离
    */
    floatingTop = ($(window).scrollTop() + $(window).height() - floatingHeight) - 200 + 'px';
    if ($(window).scrollTop() >= 1070) {
      a.style.display = 'block';
      a.style.top = floatingTop;
    }
    if ($(window).scrollTop() <= 1070) {
      a.style.display = 'none';
    }
    // console.log(floatingTop);
    // 如果页面内容高度小于屏幕高度，div#footer将绝对定位到屏幕底部，否则div#footer保留它的正常静态定位
    // if(($(document.body).height()+floatingHeight) < $(window).height()) {
    //   $(".floating").css({ position: "absolute",left:"0" }).stop().css({top:floatingTop});
    // }
  }
  positionFloating();
  $(window).scroll(positionFloating).resize(positionFloating);
});
