<template>
  <!-- 弹出框 -->
  <div id="setting">
    <div class="areaclose"></div>
    <div class="box">
      <form action="/example/html5/demo_form.asp" method="get">
        <input type="url" id="user_url" /><br /><br />
        <select id="province">
          <!-- {% for h in categorylist %} -->
          <option>1111</option>
          <!-- {% endfor %} -->
        </select>
        <span id="submit" class="bottom">添加订阅</span>
        <input type="submit" />
      </form>
      <div id="bottom">
        <p data-url="all" class="bottom">更新所有</p>
        <p data-url="" class="bottom">缓存所有图片</p>
        <p data-url="" class="bottom">导入OPML文件</p>
        <p data-url="" class="bottom closeall">关闭</p>
      </div>
    </div>
  </div>

  <!-- 弹出框 -->
  <div id="open">
    <div class="areaclose"></div>
    <div class="page-controls">
      <i class="w1280" title="宽度1280px"> 1280 </i>
      <i class="w800" title="宽度800px"> 800 </i>
      <i class="zoomin" title="字号放大"> + </i>
      <i class="zoomout" title="字号缩小"> - </i>
      <i class="close" title="关闭"> x </i>
      <!--			<i class="two"> =</i>-->
    </div>
    <div id="page" class="pagestyle">
    </div>

  </div>

  <!-- 拖动条 -->
  <div id="middle">
  </div>

  <!-- 框架 -->
  <div id="flex-wrap">

    <!-- 侧边栏 -->
    <div id="flex-aside">
      <nav>
        <div>
          <p class="settingall">设置</p>
          <h2>时间过滤</h2>
          <ul>
            <li>
              <a data-href="today">
                <h3>今天</h3>
              </a>
            </li>
            <li>
              <a data-href="threedays">
                <h3>最近三天</h3>
              </a>
            </li>
            <li>
              <a data-href="week">
                <h3>最近一周</h3>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2>娱乐</h2>
          <ul>
            <li>
              <a data-href="zongyi">
                <img src="http://www.iqiyi.com/favicon.ico" alt="综">
                <h3>综艺节目</h3>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2>设计</h2>
          <ul>
            <li>
              <a data-href="zcool">
                <img src="http://static.zcool.cn/git_z/z/site/favicon.ico?version=1506612911192" alt="站">
                <h3>站酷</h3>
              </a>
            </li>
            <li>
              <a data-href="uicn">
                <img src="http://www.ui.cn/favicon.ico" alt="U">
                <h3>ui中国</h3>
              </a>
            </li>
            <li>
              <a data-href="uehtml">
                <img src="http://www.uehtml.com/favicon.ico" alt="U">
                <h3>uehtml</h3>
              </a>
            </li>
            <li>
              <a data-href="behance">
                <img src="https://www.behance.net/favicon.ico" alt="B">
                <h3>behance</h3>
              </a>
            </li>
            <li>
              <a data-href="dribbble">
                <img
                  src="https://cdn.dribbble.com/assets/favicon-63b2904a073c89b52b19aa08cebc16a154bcf83fee8ecc6439968b1e6db569c7.ico"
                  alt="D">
                <h3>dribbble</h3>
              </a>
            </li>
          </ul>
        </div>


        <div>
          <h2>阿松大</h2>
          <ul>

            <li>
              <a data-href="">
                <img src="" alt="">
                <h3>标题</h3>
                <i>1111</i> <i>111111</i>
                <i>2551</i>
              </a>
            </li>

          </ul>
        </div>

      </nav>

      <div>
        <i class="show_text">-</i>
        <i class="prex"></i>
        <i class="next"></i>
      </div>
    </div>

    <!-- 列表栏 -->
    <div id="flex-content">

      <div class="page-controls">
        <i class="view1" data-theme="/static/css/view/view01.css"> 1 </i>
        <i class="view2" data-theme="/static/css/view/view02.css"> 2 </i>
        <i class="view3" data-theme="/static/css/view/view03.css"> 3 </i>
        <i class="view4" data-theme="/static/css/view/view04.css"> 4 </i>
      </div>

      <div id="wrapper" class="zcool">
        <ul>
          <li class="reed">
            <a href=" " target="_blank">
              <div class="z-img"><img src=" " alt=" "></div>
              <div class="z-info">
                <h4>啊打发</h4>
                <img src="http://img.zcool.cn/community/04eeda589d6bd8a801219c777a7dea.jpg@80w_80h_1c_1e_1o_100sh.jpg">
                <span>爱的发声</span>
              </div>
            </a>
          </li>

        </ul>
      </div>
    </div>

    <!-- 预览栏 -->
    <div id="flex-preview">
      <a href="http://images.ixiqi.com/wp-content/uploads/2017/09/20170909-tna-2.jpg">
        <img class="alignnone size-medium wp-image-106309"
          src="http://images.ixiqi.com/wp-content/uploads/2017/09/20170909-tna-2-490x367.jpg" alt="20170909-tna-2"
          width="490" height="367" /></a>
      <p class="packaging-competition"></p>
    </div>

  </div>
</template>

<script>

</script>

<style scoped lang="scss">
#flex-wrap {
  display: flex;
  height: 100%;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  /*    background-color: #90D9F7;*/
}

#flex-aside {
  flex-grow: 0;
  width: 300px;
  position: relative;
  background-color: #111;
}

#flex-aside:hover {
  background-color: #080808;
}

#flex-preview {
  flex-grow: 0;
  position: relative;
  width: 300px;
  /*    background-color: #B1FF84;*/
  overflow: auto;
  background-color: #111;
}

#flex-preview>div {
  overflow: 100%;
}

#flex-preview img {
  width: 100%;
}

#flex-content {
  flex-grow: 1;
  width: 0;
  padding: 40px;
  /*    background-color: #F5DE25;*/
  overflow: auto;
  /*    z-index: 999;*/
}

#middle {
  position: fixed;
  left: 300px;
  right: 0;
  /*    margin-right: -0px;*/
  height: 100%;
  width: 20px;
  /*border-left: 1px solid #2c313a;*/
  /*    background-color: #000;*/
  z-index: 999;
  cursor: e-resize;
}

#middle:hover {
  /*    background-color: #000;*/
  border-left: 1px solid #2c313a;
}


/*
#flex-aside {
    position: absolute;
    width: 240px;
    height: 100%;
    right: 0;
    padding: 0 20px 0 20px;
    z-index: 99;
    transition: all 0.2s ease-in-out;
}
*/


/* 侧边栏 */


#flex-aside>nav {
  position: relative;
  padding-top: 70px;
  height: 100%;
  transition: all 0.2s ease-in-out;
}

#flex-aside>nav>div {
  width: 100%;
  float: left;
  transition: all 0.2s ease-in-out;
}

#flex-aside>div {
  position: absolute;
  width: 100%;
  height: 140px;
  left: 0;
  bottom: 0;
}

#flex-aside .prex,
#flex-aside .next {
  display: block;
  width: 100%;
  height: 70px;
  cursor: pointer;
}

#flex-aside .prex {
  background: url(prex.png) no-repeat center;
}

#flex-aside .prex:hover,
#flex-aside .next:hover {
  background-color: #0a0a0a;
}

#flex-aside .next {
  background: url(next.png) no-repeat center;
}


/* 侧边栏 - 菜单 */

nav>div>h2 {
  display: block;
  padding-left: 30px;
  height: 40px;
  line-height: 30px;
  background: url(down.png) no-repeat;
  border-radius: 3px;
  cursor: pointer;
  color: #666;
  transition: all 0.3s ease-in-out;
  font-size: 18px;
}

nav>div>h2:hover {
  /*	background: url(down.png) no-repeat;*/
  color: #ccc;
}

nav>div>h2.on {
  font-weight: bold;
  background: url(right.png) no-repeat;
  color: #ccc;
}

nav {
  padding-left: 20px;
  transition: all 0.3s ease-in-out;
}

nav ul {
  position: relative;
  padding-bottom: 10px;
  display: none;
  transition: all 0.3s ease-in-out;
}

nav ul.on {
  display: block;
}

nav ul>li {
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;
}

nav ul>li>a {
  position: relative;
  display: block;
  height: 42px;
  line-height: 42px;
  border-radius: 3px;
  color: #555;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
}

nav ul>li.on>a {
  color: #ccc;
}

nav ul>li:hover a {
  /*	background: #191919;*/
  color: #ccc;
}

nav ul>li>a img {
  position: absolute;
  background-color: #fff;
  opacity: 0.3;
  width: 24px;
  height: 24px;
  color: #333;
  line-height: 24px;
  text-align: center;
  left: 30px;
  top: 7px;
  /*border-radius: 1px;*/
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
}

nav ul>li:hover>a img,
nav ul>li.on>a img {
  opacity: 1;
}

nav ul>li>a h3 {
  position: absolute;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 50%;
  padding: 8px 0;
  overflow: hidden;
  height: 24px;
  left: 64px;
  top: 0;
  line-height: 24px;
}

nav ul>li>a i {
  position: absolute;
  right: 20px;
}


/* 列表栏 */

.list-controls {
  position: absolute;
  right: 20%;
  top: 50%;
  transition: all 0.2s ease-in-out;
}

.list-controls i {
  display: block;
  width: 1.5em;
  height: 1.5em;
  margin-bottom: 5px;
  background-color: #111;
  text-align: center;
  line-height: 1.5em;
  font-size: 1.2em;
  border-radius: 20px;
  color: #eee;
}

.list-controls i:hover {
  color: white;
  background-color: #000;
}

/* 设置框 */

#setting {
  position: absolute;
  bottom: -100%;
  width: 100%;
  height: 100%;
  opacity: 0;
  padding-bottom: 300px;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: -99;
  /*    overflow-y: auto;*/
  transition: all 0.2s ease-in-out;
}

#setting.on {
  z-index: 99;
  top: 0;
  opacity: 1;
}

#setting .box {
  max-width: 800px;
  height: 400px;
  margin: auto;
  padding: 30px;
  background-color: #0b2e13;
}

/* 弹出框 */

#open {
  position: absolute;
  bottom: -100%;
  width: 100%;
  height: 100%;
  opacity: 0;
  padding-bottom: 300px;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: -99;
  /*    overflow-y: auto;*/
  transition: all 0.2s ease-in-out;
}



#open .areaclose {
  position: absolute;
  top: 0;
  /*bottom: -100%;*/
  width: 100%;
  height: 100%;
  opacity: 0;
  /*padding-bottom: 300px;*/
  /*background-color: rgba(0, 0, 0, 0.9);*/
  /*z-index: -99;*/
  /*!*    overflow-y: auto;*!*/
  /*transition: all 0.2s ease-in-out;*/
}

#open.on {
  z-index: 99;
  top: 0;
  opacity: 1;
}

.page-controls {
  position: absolute;
  right: 17%;
  top: 50%;
  z-index: 66;
}

#open .page-controls {
  z-index: 100;
}

.page-controls i {
  display: block;
  width: 3em;
  height: 3em;
  margin-bottom: 0.5em;
  background-color: #111;
  text-align: center;
  border-radius: 50px;
  line-height: 3em;
  font-size: 1.2em;
  color: #999;
}

.page-controls i:hover {
  color: white;
  background-color: #000;
}

.page-controls i.on {
  color: white;
  background-color: #000;
}

.page-controls i.zoomout:hover {
  cursor: zoom-out;
}

.page-controls i.zoomin:hover {
  cursor: zoom-in;
}

.pagestyle,
.pagestyle p,
.pagestyle a,
.pagestyle span,
.pagestyle li,
.pagestyle h1,
.pagestyle h2,
.pagestyle h3,
.pagestyle h4,
.pagestyle h5,
.pagestyle h6 {
  font-family: "STHeiti Light";
  font-size: 20px;
  font-weight: 200;
  color: #b5b5b5;
  line-height: 1.8em;
  text-align: left;
  letter-spacing: 0.05em;
}

.pagestyle h1 {
  font-size: 1.5em;
  color: #fff;
  text-align: center;
  font-weight: 200;
  margin-bottom: 2em;
}

.pagestyle {
  position: relative;
  top: 0;
  margin: 0 auto;
  padding: 50px 100px 200px 100px;
  width: 800px;
  max-width: 1280px;
  height: calc(100% - 200px);
  background-color: #111;
  z-index: 99;
  overflow: auto;
  text-align: center;
}

.pagestyle a {
  color: #428ef8;
}

.pagestyle a:hover {
  text-decoration: underline;
  color: #629ef1;
  cursor: pointer;
}

.pagestyle strong {
  font-weight: bold;
  color: #ddd;
}

.pagestyle h4 {
  color: #eee;
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 2em;
}

.pagestyle p {
  /*
    font: 1.4em/2 Tahoma, Verdana, "微软雅黑";
    letter-spacing: 0.25px;
*/
  margin: 20px 0;
  text-indent: 2em;
  text-align: justify;
}

.pagestyle img {
  /*    min-width: 100%;*/
  /*    background-color: #F6F6F6;*/
  /*    border: 1px solid #E6E6E6;*/
  /*    padding: 8px;*/
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  margin: 20px 0;
  /*display: block;*/
  /* 让缩进失效 */
}

#open iframe {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

#submit {
  /*
	display: block;
	background-color: aqua;
	width: 100px;
	padding: 10px;
*/
}

.bottom {
  display: block;
  border-radius: 3px;
  width: 100px;
  color: white;
  text-align: center;
  line-height: 40px;
  height: 40px;
  margin: 20px;
  background-color: dodgerblue;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.bottom:hover {
  background-color: cornflowerblue;
}

.zcool ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  /*    background-color: brown;*/
}

.zcool ul li {
  width: 250px;
  height: 230px;
  position: relative;
  float: left;
  overflow: hidden;
  margin: 0 10px 30px 10px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  /*    overflow: hidden;*/
  /*    background-color: beige;*/
}

.zcool ul li：hover {
  border-radius: 30px;
  /*    margin-top: -20px;*/
  /*    box-shadow: 10px 10px 5px #888888;*/

}

.zcool ul li.reed {
  opacity: 0.5;
}

.zcool ul li a {}

.zcool ul .z-img {
  width: 100%;
  height: 150px;
  background-color: #303338;
  /*    text-align: center;*/
  /*    vertical-align: middle;*/
  /*    display: table-cell;*/
}

.zcool ul .z-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /*    object-fit: scale-down;*/
}

.zcool ul .z-info {
  /* position: absolute; */
  /* width: 100%; */
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  /* top: 0; */
  /* transition: all 0.3s ease-in-out; */
  /* opacity: 0; */
}

.zcool ul a:hover .z-info {
  bottom: 20px;
  opacity: 1;
}

.zcool ul a.on .z-info {
  bottom: 20px;
  opacity: 1;
}

.zcool ul .z-info h4 {
  color: #ccc;
  position: relative;
  font-size: 16px;
  text-align: left;
  top: 18px;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  transition: all 0.3s ease-in-out;
}

.zcool ul .z-info img {
  position: absolute;
  width: 30px;
  height: 30px;
  left: 20px;
  bottom: -30px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  opacity: 0;
}

.zcool ul a:hover .z-info img {
  bottom: 20px;
  opacity: 1;
}

.zcool ul .z-info span {
  color: #999;
  opacity: 0;
  position: absolute;
  height: 30px;
  line-height: 30px;
  left: 57px;
  bottom: -30px;
  transition: all 0.3s ease-in-out;
}

.zcool ul a:hover .z-info span {
  bottom: 20px;
  opacity: 0;
}
</style>
