/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/change_color.js":
/*!***************************************!*\
  !*** ./src/assets/js/change_color.js ***!
  \***************************************/
/***/ (function() {

eval("$('#faq-question').on(\"click\", function() {\r\n    $('#faq-container').toggleClass('clicked');\r\n})\r\n\r\n$('#faq-question1').on(\"click\", function() {\r\n    $('#faq-container1').toggleClass('clicked');\r\n})\r\n\r\n$('#faq-question2').on(\"click\", function() {\r\n    $('#faq-container2').toggleClass('clicked');\r\n})\r\n$('#faq-question3').on(\"click\", function() {\r\n    $('#faq-container3').toggleClass('clicked');\r\n})\r\n\r\n$('#faq-question4').on(\"click\", function() {\r\n    $('#faq-container4').toggleClass('clicked');\r\n})\r\n\r\n$('#faq-question5').on(\"click\", function() {\r\n    $('#faq-container5').toggleClass('clicked');\r\n})\r\n\r\n$('#faq-question6').on(\"click\", function() {\r\n    $('#faq-container6').toggleClass('clicked');\r\n})\r\n\r\n$('#faq-question7').on(\"click\", function() {\r\n    $('#faq-container7').toggleClass('clicked');\r\n})\r\n\r\n$('#faq-question8').on(\"click\", function() {\r\n    $('#faq-container8').toggleClass('clicked');\r\n})\r\n\r\n$('#faq-question9').on(\"click\", function() {\r\n    $('#faq-container9').toggleClass('clicked');\r\n})\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/change_color.js?");

/***/ }),

/***/ "./src/assets/js/hide_hr.js":
/*!**********************************!*\
  !*** ./src/assets/js/hide_hr.js ***!
  \**********************************/
/***/ (function() {

eval("$(\"#faq-question\").click(function() {\r\n  $('.toggled_block').toggle();\r\n});\r\n$(document).on('click', function(e) {\r\n  e.stopPropagation();\r\n});\r\n\r\n$(\"#faq-question1\").click(function() {\r\n  $('.toggled_block1').toggle();\r\n});\r\n$(document).on('click', function(e) {\r\n  e.stopPropagation();\r\n});\r\n\r\n$(\"#faq-question2\").click(function() {\r\n  $('.toggled_block2').toggle();\r\n});\r\n$(document).on('click', function(e) {\r\n  e.stopPropagation();\r\n});\r\n\r\n$(\"#faq-question3\").click(function() {\r\n  $('.toggled_block3').toggle();\r\n});\r\n$(document).on('click', function(e) {\r\n  e.stopPropagation();\r\n});\r\n\r\n$(\"#faq-question4\").click(function() {\r\n  $('.toggled_block4').toggle();\r\n});\r\n$(document).on('click', function(e) {\r\n  e.stopPropagation();\r\n});\r\n\r\n$(\"#faq-question5\").click(function() {\r\n  $('.toggled_block5').toggle();\r\n});\r\n$(document).on('click', function(e) {\r\n  e.stopPropagation();\r\n});\r\n\r\n$(\"#faq-question6\").click(function() {\r\n  $('.toggled_block6').toggle();\r\n});\r\n$(document).on('click', function(e) {\r\n  e.stopPropagation();\r\n});\r\n\r\n$(\"#faq-question7\").click(function() {\r\n  $('.toggled_block7').toggle();\r\n});\r\n$(document).on('click', function(e) {\r\n  e.stopPropagation();\r\n});\r\n\r\n$(\"#faq-question8\").click(function() {\r\n  $('.toggled_block8').toggle();\r\n});\r\n$(document).on('click', function(e) {\r\n  e.stopPropagation();\r\n});\r\n\r\n$(\"#faq-question9\").click(function() {\r\n  $('.toggled_block9').toggle();\r\n});\r\n$(document).on('click', function(e) {\r\n  e.stopPropagation();\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/hide_hr.js?");

/***/ }),

/***/ "./src/assets/js/join_hidden.js":
/*!**************************************!*\
  !*** ./src/assets/js/join_hidden.js ***!
  \**************************************/
/***/ (function() {

eval("window.onload = function () {\r\n    \r\n    var a = document.querySelector('#parent');\r\n    \r\n    a.onmouseout = function(e) {\r\n      document.getElementById('child').style.display='none';\r\n      document.getElementById('child').style.fill='url(#paint0_linear_481_3556_main';\r\n    }\r\n  \r\n    a.onmouseover = function(e) {\r\n      document.getElementById('child').style.display='block';\r\n      document.getElementById('child').style.fill='url(#paint0_linear_481_3556_main';\r\n    };\r\n\r\n    var b = document.querySelector('#main_bottom');\r\n    \r\n    b.onmouseout = function(e) {\r\n      document.getElementById('main_child').style.display='none';\r\n    }\r\n  \r\n    b.onmouseover = function(e) {\r\n      document.getElementById('main_child').style.display='block';\r\n    };\r\n    \r\n}\r\n  \n\n//# sourceURL=webpack://brainscloud/./src/assets/js/join_hidden.js?");

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ (function() {

eval("// Get all .faq-question\r\nvar questions = document.getElementsByClassName(\"faq-question\");\r\n\r\n// Assign openQuestion on click\r\nfor ( var i = 0; i < questions.length; i++ ) {\r\n  \r\n  questions[i].onclick = openQuestion;\r\n  \r\n}\r\n\r\n// Apply .hidden to sibling .faq-answer\r\n// Apply .open to .faq-question\r\nfunction openQuestion(e) {\r\n  \r\n  var answer = (event.target).parentNode.getElementsByClassName(\"faq-answer\")[0];\r\n  \r\n  if ( -1 !== answer.className.indexOf( \"hidden\" ) ) {\r\n    \r\n    answer.className = answer.className.replace( \" hidden\", \"\" );\r\n    \r\n  } else {\r\n    \r\n    answer.className += \" hidden\";\r\n    \r\n  }\r\n  if ( -1 !== event.target.className.indexOf( \"open\" ) ) {\r\n    \r\n    event.target.className = event.target.className.replace( \" open\", \"\" );\r\n    \r\n  } else {\r\n    \r\n    event.target.className += \" open\";\r\n    \r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/main.js?");

/***/ }),

/***/ "./src/assets/js/scrolling_menu.js":
/*!*****************************************!*\
  !*** ./src/assets/js/scrolling_menu.js ***!
  \*****************************************/
/***/ (function() {

eval("var scrolled;\r\nwindow.onscroll = function() {\r\n    scrolled = window.pageYOffset || document.documentElement.scrollTop;\r\n    if(scrolled > 400){\r\n        $(\".header\").css({\"background\": \"rgba(46,51,59, 0.6)\"})\r\n    }\r\n    if(400 > scrolled){\r\n        $(\".header\").css({\"background\": \"#2E333B\"})         \r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/scrolling_menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/change_color.js"]();
/******/ 	__webpack_modules__["./src/assets/js/hide_hr.js"]();
/******/ 	__webpack_modules__["./src/assets/js/join_hidden.js"]();
/******/ 	__webpack_modules__["./src/assets/js/main.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/scrolling_menu.js"]();
/******/ 	
/******/ })()
;