$(function(){
  // class属性がbtnの要素がクリックされたら
 $('.btn').on('click', function(){
// inputにクリックされましたと表示させる
 $('.text-box').val("クリックされました");
  });
});