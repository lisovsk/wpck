"use static"

// document.getElementById('loginButton').onclick = function() {
//     require.ensure([], function(require) {
//         var login = require('./login');
//         console.log(login)
//         login();
//     }, 'auth')
// }

// document.getElementById('logoutButton').onclick = function() {
//     require.ensure([], function(require) {
//         var logout = require('./logout');
//         console.log(logout)
//         logout();
//     })
// }

// let moduleName = 'about';

// let context = require.context('./routes', true, /\.js$/)

// context.keys().forEach(function(path) {
//     let module = context(path);
//     module();
// })

// console.log(context.keys());
// let route;
// try {
//     route = context('./' + moduleName);
// } catch(e) {
//     alert(e)
// }

// if(route) {
//     console.log(route)
//     route();
// }

// let moduleName = 'about';
// let handler;
// try {
//     handler = require('bundle-loader!./routes/' + moduleName);
// } catch(e) {
//     alert('no such path')
// }

// if(handler) {
//     handler(function(route) {
//         route();
//     })
// }

let lod =  require('lodash')
console.log(lod);
console.log(_);