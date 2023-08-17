$(window).on('load scroll', (e) => {
    // HTMLを読み込んだら
    if(e.type === 'load'){
      
      console.log('loadイベントが発生しました');
    }
    // スクロールした場合
    if(e.type === 'scroll'){
      console.log('scrollイベントが発生しました');
    }
  });
