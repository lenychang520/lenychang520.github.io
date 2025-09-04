var posts=["2025/09/02/C语言“指针”的保姆级理解/","2025/09/04/分支语句if，switch/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };