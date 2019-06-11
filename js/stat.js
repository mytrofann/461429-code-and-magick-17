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
var SATURATION_RANGE = {
  start: 1,
  end: 255
};

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(255, 255, 255, 1)');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X * 2, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X * 2, (CLOUD_Y + GAP) * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, ' + getRandomInt(SATURATION_RANGE.start, SATURATION_RANGE.end) + ', 1)';

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(CLOUD_X + FONT_GAP + (BAR_WIDTH + FONT_GAP) * i, CLOUD_HEIGHT - CLOUD_Y - GAP - barHeight * times[i] / maxTime, BAR_WIDTH, barHeight * times[i] / maxTime);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(players[i], CLOUD_X + FONT_GAP + (BAR_WIDTH + FONT_GAP) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + FONT_GAP + (BAR_WIDTH + FONT_GAP) * i, CLOUD_HEIGHT - GAP - CLOUD_Y - GAP - barHeight * times[i] / maxTime - GAP);
  }
};
