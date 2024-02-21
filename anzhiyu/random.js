var posts=["2024/02/21/hello-world/","2024/02/21/如何创建一个hexo的静态博客-1/","2024/02/21/模板/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };