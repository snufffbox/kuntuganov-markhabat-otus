const Parser = require('rss-parser');
const parser = new Parser();

async function getFromUrl(url) {
  const result = await parser.parseURL(url);

  return result;
};

 module.exports = {
  getFromUrl: getFromUrl
}; 