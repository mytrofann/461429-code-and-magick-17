'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 50;
var BAR_WIDTH = 40;
var TEXT_HEIGHT = 80;
var barHeight = CLOUD_HEIGHT - TEXT_HEIGHT - (CLOUD_Y + GAP) * 2;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var randomIntFromInterval = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X * 2, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X * 2, (CLOUD_Y + GAP) * 2);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, 255, ' + randomIntFromInterval(0, 1) + ')';

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillText(players[i], CLOUD_X * 2 + FONT_GAP * i, TEXT_HEIGHT);
    ctx.fillRect(CLOUD_X * 2 + FONT_GAP * i, CLOUD_Y + GAP + TEXT_HEIGHT, BAR_WIDTH, barHeight);
  }
};
