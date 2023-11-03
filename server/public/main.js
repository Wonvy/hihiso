"use strict";

console.log(this === undefined); //

let g_JSONdata = [], storedData;

const JSONS = {
  // 初始化
  init: function () {
    return new Promise((resolve, reject) => {
      fetch("/json/zcool.json")
        .then((response) => response.json())
        .then((data) => {
          g_JSONdata = data;
          console.log('g_JSONdata:', g_JSONdata);
          resolve(data);
        })
        .catch((error) => {
          console.log("json error", error);
          reject(error);
        });
    });
  },

  // 渲染 JSON 数据的函数
  render_imglist: function (container, data) {
    const ul = document.querySelector(container);
    if (!ul || !Array.isArray(data)) { return };
    data.forEach(item => {
      const li2 = document.createElement('li');
      li2.innerHTML = `
      <h3>${item.title}</h3>
      <img src="https://img.zcool.cn/community/031caumt0gkjdx2akc998c83535.jpeg" alt="">
      <img>作者：${item.username}</>
      <p>作者地址：${item.userurl}</p>
      <p>人气：${item.renqi}</p>
      <a href="${item.website}" target="_blank">查看详情</a>`;
      const li1 = document.createElement('li');

      li1.innerHTML = `
        <div class="thumb">
          <img src="${item.img}" alt="">
        </div>
        <div class="detail">
          <h3 data-href="${item.website}">${item.title}</h3>
        </div>
      `
      ul.appendChild(li1);
    });
  },


}


JSONS.init()
  .then(data => {
    JSONS.render_imglist('.information ul', g_JSONdata)
  })
  .catch(error => {
    console.error('获取JSON数据失败:', error);
  });


// 判断变量类型
function getType(variable) {
  if (variable === null) {
    return 'null';
  } else if (Array.isArray(variable)) {
    return 'array';
  } else {
    return typeof variable;
  }
}


function getfeed(url) {
  const parser = new RSSParser();
  parser.parseURL(url, (err, feed) => {
    if (err) {
      console.error('Error parsing RSS feed:', err);
      return;
    }

    console.log(feed);
    const title = feed.title;
    if (feed.items.length < 0) { return }
    feed.items.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${item.link}" target="_blank">${item.title}</a>
      `
      console.log(item.title);
      console.log(item.link);
      console.log(item.pubDate);
    })


    // 获取图片（假设图片在 feed.items 的第一个条目中）
    // if (feed.items && feed.items.length > 0) {
    //   const firstItem = feed.items[0];
    //   const imageUrl = firstItem.enclosure.url; // 假设图片是通过 enclosure 属性提供的
    //   console.log('Image URL:', imageUrl);
    // } else {
    //   console.log('No items found in the RSS feed.');
    // }
  });
}

let link = document.querySelector(".bootmarks .link");

link.addEventListener("mouseover", (e) => {
  let a = e.target.closest('a');
  let img = document.querySelector(".introduction img");
  let h3 = document.querySelector(".introduction h3");
  let p = document.querySelector(".introduction p");

  if (!a) { return };
  let href = a.dataset.href;
  img.setAttribute("src", `https://s0.wp.com/mshots/v1/${href}`);
  h3.textContent = a.querySelector("p").textContent;
  p.textContent = a.dataset.href;
})





// 调用函数获取 RSS 数据
// fetchRssData('https://rsshub.app/36kr/newsflashes');

// 异步获取 RSS 数据的 JSON 格式
async function fetchRssData(rssurl) {
  try {
    const response = await fetch('/rss?url=' + rssurl);
    const rssData = await response.json();
    console.log(rssData);
  } catch (error) {
    console.error('Error:', error);
  }
}

// 异步获取 RSS 数据的 JSON 格式
async function getIcondata(weburl) {
  try {
    const response = await fetch('/icon?url=' + weburl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}


// 调用函数获取 RSS 数据
// fetchRssData('https://rsshub.app/36kr/newsflashes');
// getIcondata('https://www.iconfont.cn/');


// 异步获取 RSS 数据的 JSON 格式
async function getWebsiteData(weburl) {
  try {
    const response = await fetch('/website?url=' + weburl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getWebsiteData('https://tongji.baidu.com/');