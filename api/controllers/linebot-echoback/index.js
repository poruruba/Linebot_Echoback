'use strict';

const config = {
  channelAccessToken: '【LINEチャネルアクセストークン(長期)】',
  channelSecret: '【LINEチャネルシークレット】',
};

const HELPER_BASE = process.env.HELPER_BASE || '../../helpers/';
const LineUtils = require(HELPER_BASE + 'line-utils');
const line = require('@line/bot-sdk');
const app = new LineUtils(line, config);

app.message(async (event, client) =>{
  console.log(event);

  var message = { type: 'text', text: event.message.text + ' ですね' };
  return client.replyMessage(event.replyToken, message);
});

exports.fulfillment = app.lambda();
