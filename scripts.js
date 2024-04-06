$(document).ready(function() {
    var shareButton = $('#shareButton');
    var sharePanel = $('#sharePanel');
  
    // 為分享按鈕添加懸浮事件處理器
    shareButton.hover(
      function() { // mouseenter
        sharePanel.show();
      },
      function() { // mouseleave
        sharePanel.hide();
      }
    );
  
    // 處理實際的分享功能（這裡僅作為示例，需要替換為實際的分享URL）
    $('.share-link').click(function(e) {
      e.preventDefault();
      var platform = $(this).data('platform');
      var shareUrl = getShareUrl(platform); // 假設這是一個返回對應平台分享URL的函數
      window.open(shareUrl, '_blank'); // 打開新的瀏覽器標籤進行分享
    });
  });