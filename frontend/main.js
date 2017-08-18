'use strict';

// require.ensure([], function(require){
  let Menu = require('./menu');
  console.log(Menu);
  let pandaMenu = new Menu.default({
    title: "Меню панды",
    items: [{
      text: 'Яйца',
      href: '#eggs'
    }, {
      text: 'Мясо',
      href: '#meat'
    }, {
      text: '99% еды - бамбук!',
      href: '#bamboo'
    }]
  });
  
  document.body.appendChild(pandaMenu.elem);
// });

