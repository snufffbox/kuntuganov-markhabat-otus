const mongoose = require('mongoose');

const myDB = 'mongodb://localhost/rss';

const connection = mongoose.createConnection(myDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 10,
  useCreateIndex: true,
  useFindAndModify: false,
  promiseLibrary: global.Promise
});

const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(connection);

var Schema = mongoose.Schema;

const articlesSchema = new Schema({
  title: String,
  link: { type: String, unique: true },
  channelId: Number,
});

const channelsSchema = new Schema({
  title: String,
  link: { type: String, unique: true }
});

articlesSchema.plugin(autoIncrement.plugin, {
  model: 'Articles',
  field: '_id',
  startAt: 1,
  incrementBy: 1
});

channelsSchema.plugin(autoIncrement.plugin, {
  model: 'Channels',
  field: '_id',
  startAt: 1,
  incrementBy: 1
});

const Channel = connection.model('Channels2', channelsSchema);

const Article = connection.model('Articles2', articlesSchema);

function saveChannel(data) {
  const line = new Channel(data);

  Channel.exists({ link: line.link }, function(err, result) {
    if(!result)
      return line.save();
  });
};

function saveArticle(data) {
  let line = new Article(data);

  Article.exists({ link: line.link }, function(err, result) {
    if(!result)
      return line.save();
  });
};

function getAllChannel() {
  return Channel.find();
};

function getAllArticlesByChannelId(channel_id) {
  return Article.find({channelId: channel_id});
};

module.exports = {
  saveChannel: saveChannel,
  saveArticle: saveArticle,
  getAllChannel: getAllChannel,
  getAllArticlesByChannelId: getAllArticlesByChannelId
};