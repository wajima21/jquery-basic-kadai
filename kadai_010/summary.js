$(function(){


  let toggle = false; // 色が赤いかどうかをトラッキングする変数

  // idタグのchange-colorがクリックされたとき
  $("#change-color").on("click", function(){
    if (!toggle) {
      // idタグtargetの色を赤にする
      $("#target").css("color", "red");
    } else {
      // idタグtargetの色を元に戻す
      $("#target").css("color", "black");
    }
    toggle = !toggle; // toggleの値を反転させる
  });


  let textToggle = false; // テキストが"Hello!"かどうかをトラッキングする変数

  // idタグのchange-textがクリックされたとき
  $("#change-text").on("click", function(){
    if (!textToggle) {
      // idタグtargetの文字を"Hello!"にする
      $("#target").text("Hello!");
    } else {
      // idタグtargetの文字を"こんにちは"にする
      $("#target").text("こんにちは");
    }
    textToggle = !textToggle; // textToggleの値を反転させる
  });


    // idタグfede-outがクリックされたとき
    $("#fede-out").on("click",function(){
      //idタグtargetをフェードアウトする
      $("#target").fadeOut();
    });

    //idタグfede-inがクリックされたとき
    $("#fede-in").on("click",function(){
      // idタグtargetをフェードインする
      $("#target").fadeIn();
    });
});
