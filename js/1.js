document.addEventListener('DOMContentLoaded', function () {
	var mainNav = document.getElementById('biij1');
	if (mainNav) {
		mainNav.innerHTML = `
             <div class="sidebar d-md-block">
            <a href="#ho" class="active">引言</a>
            <a href="#js">JS</a>
            <a href="#css">CSS</a>
            <a href="#html">HTML</a>
        </div>
      `;
	}
});
// biij2

document.addEventListener('DOMContentLoaded', function () {
	var mainNav = document.getElementById('biij2');
	if (mainNav) {
		mainNav.innerHTML = `
        
        
<div class="content">
            <div id="ho">
                <!-- 文章内容 -->
                <h1>引言</h1>
                <p>这个页面是我的一些性格和我自己的一些技术过程中的记录小技巧和一些备忘的小知识希望在这个页面里面也可以找到您的想法和意见</p>    
            </div>
            <div id="js">
                <h1>JS</h1>
		<p>JavaScript(简称JS)是一种轻量级的脚本语言,常用于网页前端开发,实现与用户交互、动态效果和数据处理等功能。</p>
        <h4>引用第三方库</h4>    
        <p>可以使用 <code>&lt;script&gt;</code> 标签引用第三方的 JavaScript 库,例如:</p>
        <pre><code>&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</code></pre>   
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
            </div>
            <div id="css">
                <h1>CSS</h1>
		<p>CSS(层叠样式表)是一种样式表语言,用于描述网页的外观和样式。</p>
        <h4>添加样式</h4>    
        <p>可以使用 <code>&lt;style&gt;</code> 标签或外部样式表文件添加样式,例如:</p>
        <pre><code>&lt;style&gt;   
          body {     
          background-color: #f1f1f1;   
          }  
          &lt;/style&gt;</code></pre>
        <p>或者:</p>
        <pre><code>&lt;link rel="stylesheet" href="styles.css"&gt;</code></pre>           
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
            </div>
            <div id="html">
                <h1>HTML</h1>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
            </div>
        </div>
      
      `;
	}
});
