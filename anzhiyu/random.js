var posts=["2024/02/24/0成本搭建真正永久免费的科学上网节点，解锁奈飞和GPT/","2024/02/21/Cloudflare-Workers-KV-搭建一个带后台管理的blog/","2024/02/21/Hiddify-Manager安装教程/","2024/02/21/Linux如何开启BBR加速/","2024/02/21/Markdown 基本语法/","2024/02/21/Markdown编辑器推荐/","2024/02/21/VPS顶级脚本/","2024/02/21/hello-world/","2024/02/21/mac/","2024/02/21/test/","2024/02/21/使用jsDelvr-cdn访问github文件/","2024/02/24/免费域名，通过Sitelutions注册永久免费域名，无需信用卡/","2024/02/21/免费图床总汇/","2024/02/21/如何创建一个hexo的静态博客-1/","2024/02/21/带地理位置的文章/","2024/02/23/通过html实现mac代码块/","2024/02/21/模板/","2024/02/24/通过worker实现自动优选反代IP/","2024/02/21/随机图片API接口/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };