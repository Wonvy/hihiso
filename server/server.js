const express = require('express');
const axios = require('axios');
const Parser = require('rss-parser');
const cors = require('cors');
const parser = new Parser();
const app = express();
const cheerio = require('cheerio');
const PORT = 3000;

const corsOptions = {
  origin: 'http://127.0.0.1:5173', // 允许来自这个来源的请求
  methods: 'GET', // 允许 GET 请求
};

app.use(cors(corsOptions)); // 使用cors中间件，允许所有来源访问
app.use(express.static('public'));

app.get('/icon', async (req, res) => {
  const url = req.query.url; // 从查询参数中获取网址
  try {
    const response = await axios.get('https://besticon-demo.herokuapp.com/allicons.json?url=' + url); // 发起请求到指定网址
    const jsondata = response.data;
    if (jsondata.icons.length > 0) {
      const firstIcon = jsondata.icons[0];
      const imageUrl = firstIcon.url;
      convertImageToBase64(imageUrl)
        .then((base64Image) => {
          res.json({ image: base64Image });
        })
        .catch((error) => {
          console.error('Error converting image to base64:', error);
          res.status(500).send('Image Conversion Error');
        });
    } else {
      res.json(jsondata);
    }

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('icon Error');
  }
});

app.get('/rss', async (req, res) => {
  const rssUrl = req.query.url; // 从查询参数中获取网址
  try {
    const feed = await parser.parseURL(rssUrl);
    res.json(feed);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/website', async (req, res) => {
  const url = req.query.url; // 从查询参数中获取网址
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const title = $('title').text();
    const description = $('meta[name="description"]').attr('content') || '';
    res.json({ title, description });
  } catch (error) {
    console.error('Error:', error);
    return { error: error.message };
  }
});

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + '/index.html');
}
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);

async function convertImageToBase64(url) {
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer'
    });

    if (response.status === 200) {
      const imageBuffer = Buffer.from(response.data, 'binary');
      const base64Image = imageBuffer.toString('base64');
      return base64Image;
    } else {
      throw new Error('Failed to fetch image');
    }
  } catch (error) {
    throw error;
  }
}

