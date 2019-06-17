'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var nameWizard = {
  names: [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ],
  surnames: [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ]
};
var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var NUMBER_WIZARD = 4;
var amount = {
  start: 0,
  end: 4
};

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getSimilarWizards = function (start, end) {
  var array = [];

  for (var i = 0; i < NUMBER_WIZARD; i++) {
    array[i] = {
      name: nameWizard.names[getRandomInt(start, end)] + ' ' + nameWizard.surnames[getRandomInt(start, end)],
      coatColor: coatColor[getRandomInt(start, end)],
      eyesColor: eyesColor[getRandomInt(start, end)]
    };
  }
  return array;
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var insertWizardTemplate = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};
insertWizardTemplate(getSimilarWizards(amount.start, amount.end));

userDialog.querySelector('.setup-similar').classList.remove('hidden');

