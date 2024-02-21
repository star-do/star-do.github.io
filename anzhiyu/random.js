var posts=["2024/02/21/Cloudflare-Workers-KV-搭建一个带后台管理的blog/","2024/02/21/Hiddify-Manager安装教程/","2024/02/21/VPS顶级脚本/","2024/02/21/hello-world/","2024/02/21/test/","2024/02/21/免费图床总汇/","2024/02/21/如何创建一个hexo的静态博客-1/","2024/02/21/带地理位置的文章/","2024/02/21/模板/","2024/02/21/随机图片API接口/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };