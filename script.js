
 function getGoogleFieldValue() {
    var inputValue = document.getElementById("g").value;
    var searchURL = "https://www.google.com/search?q="+encodeURIComponent(inputValue);
    window.location.href = searchURL;
  }
  function getYoutubeFieldValue() {
    var inputValue = document.getElementById("y").value;
    var searchURL = "https://m.youtube.com/search?q="+encodeURIComponent(inputValue);
    window.location.href = searchURL;
  }
  function getAmazonFieldValue() {
    var inputValue = document.getElementById("a").value;
    var searchURL = "https://www.amazon.com/s?k="+encodeURIComponent(inputValue);
    window.location.href = searchURL;
  }
  function getFlipkartFieldValue() {
    var inputValue = document.getElementById("f").value;
    var searchURL = "https://www.flipkart.com/search?q="+encodeURIComponent(inputValue);
    window.location.href = searchURL;
  }
  function getInstaFieldValue() {
    var inputValue = document.getElementById("i").value;
    var searchURL = "https://www.instagram.com/explore/tags/"+encodeURIComponent(inputValue)+"/";
    window.location.href = searchURL;
  }
  function getXFieldValue() {
    var inputValue = document.getElementById("x").value;
    var searchURL = "https://www.X.com/search?="+encodeURIComponent(inputValue);
    window.location.href = searchURL;
  }
    