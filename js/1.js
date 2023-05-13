document.addEventListener('DOMContentLoaded', function () {
    var mainNav = document.getElementById('cf-ding');
    if (mainNav) {
        mainNav.innerHTML = `
      <nav id="navbar" class="navbar navbar-expand-md navbar-light bg-transparent fixed-top">
      <div class="container">
          <a class="navbar-brand" href="#">春枫博客</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item"> <a class="nav-link" href="/">首页</a> </li>
                  <li class="nav-item"> <a class="nav-link" href="/biji.html">笔记</a> </li>
                  <li class="nav-item"> <a class="nav-link" href="/tool.html">工具页</a> </li>
                  <li class="nav-item"> <a class="nav-link" href="/about.html">关于</a> </li>
                  <li class="nav-item"> <a class="nav-link" href="/contact.html">联系</a> </li>
            
              </ul>
          </div>
      </div>
  </nav>
      
    
      
      `;
    }
});
