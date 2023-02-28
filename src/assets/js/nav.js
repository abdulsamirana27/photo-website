window.onscroll = function() {
  if (document.body.scrollTop > 0) {
    document.getElementById('navbar').style.background =
      'linear-gradient(to right, rgb(195,20,50), rgb(36,11,54))';
  } else {
    document.getElementById('navbar').style.background =
      'linear-gradient(to right, rgb(237,33,58), rgb(147,41,30))';
  }
};
