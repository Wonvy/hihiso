const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const websiteURL = 'https://www.baidu.com'; // 替换为你要获取图标的网站地址
const jsonFilePath = 'icons.json'; // JSON文件路径

function getFaviconBase64(url, callback) {
  request(url + '/favicon.ico', { encoding: 'binary' }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const base64 = Buffer.from(body, 'binary').toString('base64');
      callback(null, 'data:image/x-icon;base64,' + base64);
    } else {
      callback(error || 'Error fetching favicon', null);
    }
  });
}

function saveToFaviconJSON(jsonFilePath, websiteURL, faviconBase64) {
  let icons = {};
  if (fs.existsSync(jsonFilePath)) {
    icons = JSON.parse(fs.readFileSync(jsonFilePath));
  }

  icons[websiteURL] = faviconBase64;

  fs.writeFileSync(jsonFilePath, JSON.stringify(icons, null, 2));
}

getFaviconBase64(websiteURL, (error, faviconBase64) => {
  if (!error) {
    saveToFaviconJSON(jsonFilePath, websiteURL, faviconBase64);
    console.log('Favicon data saved to icons.json');
  } else {
    console.error(error);
  }
});
