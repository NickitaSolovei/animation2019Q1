/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_fullscreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/fullscreen */ "./src/utils/fullscreen.js");
/* harmony import */ var _utils_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/draw */ "./src/utils/draw.js");
// const {enterFullscreen, exitFullscreen} = require('../src/utils/fullscreen.js');



let numFPS = 1;
let interval;
let count = 0;

// add interactivity to pixels
document.querySelectorAll('.el').forEach((el) => {
    el.addEventListener('click', () => {
        el.style.backgroundColor = '#808080';
    });
});


const domFrameMatcher = [
    [['.el1'], ['.el2'], ['.el3']],
    [['.el4'], ['.el5'], ['.el6']],
    [['.el7'], ['.el8'], ['.el9']],
];


const getFrames = (domFrames) => {
    const frames = [];

    domFrames.forEach((domFrame) => {
        const frame = domFrameMatcher.map(row => row.map(column => column.map((pixelSelector) => {
            const domPixel = domFrame.querySelector(pixelSelector);
            return getComputedStyle(domPixel).backgroundColor;
        })));

        frames.push(frame);
    });

    return frames;
};


const startAnimation = () => {
    const frame1 = document.querySelectorAll('.frame1');

    const domFrames = [...frame1];

    // stop interval
    clearInterval(interval);

    if (numFPS !== 0) {
        interval = setInterval(() => {
            const frames = getFrames(domFrames);
            const frame = frames[count % domFrames.length];

            Object(_utils_draw__WEBPACK_IMPORTED_MODULE_1__["draw"])(frame);
            count += 1;
        }, 1000 / numFPS);
    }
};


function createNewFrame(existingFrame) {
    if (existingFrame === undefined) {
    // wrapper of frame with button delete and copy
        const frameElWrap = document.createElement('div');
        frameElWrap.className = 'frameWrap';

        const frameEl = document.createElement('div');
        frameEl.className = 'frame1';

        let frameRow = document.createElement('div');
        frameRow.className = 'frame-row';

        let pixElement1 = document.createElement('div');
        pixElement1.className = 'el1 el';
        let pixElement2 = document.createElement('div');
        pixElement2.className = 'el2 el';
        let pixElement3 = document.createElement('div');
        pixElement3.className = 'el3 el';

        frameRow.appendChild(pixElement1);
        frameRow.appendChild(pixElement2);
        frameRow.appendChild(pixElement3);

        frameEl.appendChild(frameRow);


        frameRow = document.createElement('div');
        frameRow.className = 'frame-row';

        pixElement1 = document.createElement('div');
        pixElement1.className = 'el4 el';
        pixElement2 = document.createElement('div');
        pixElement2.className = 'el5 el';
        pixElement3 = document.createElement('div');
        pixElement3.className = 'el6 el';

        frameRow.appendChild(pixElement1);
        frameRow.appendChild(pixElement2);
        frameRow.appendChild(pixElement3);

        frameEl.appendChild(frameRow);


        frameRow = document.createElement('div');
        frameRow.className = 'frame-row';

        pixElement1 = document.createElement('div');
        pixElement1.className = 'el7 el';
        pixElement2 = document.createElement('div');
        pixElement2.className = 'el8 el';
        pixElement3 = document.createElement('div');
        pixElement3.className = 'el9 el';

        frameRow.appendChild(pixElement1);
        frameRow.appendChild(pixElement2);
        frameRow.appendChild(pixElement3);

        frameEl.appendChild(frameRow);


        frameElWrap.appendChild(frameEl);

        // button delete frame
        const delFrame = document.createElement('button');
        delFrame.className = 'delete-frame';
        delFrame.innerHTML = 'delete';
        delFrame.addEventListener('click', () => {
            frameElWrap.parentNode.removeChild(frameElWrap);
            startAnimation();
        });
        frameElWrap.appendChild(delFrame);

        // button create new frame
        const copyFrame = document.createElement('button');
        copyFrame.className = 'delete-frame';
        copyFrame.innerHTML = 'copy';
        copyFrame.addEventListener('click', () => {
            createNewFrame(frameElWrap);
        });
        frameElWrap.appendChild(copyFrame);

        const framesEl = document.getElementById('frames');
        framesEl.appendChild(frameElWrap);
    } else {
        const frameElClone = existingFrame.getElementsByClassName('frame1')[0];
        const div1 = frameElClone.cloneNode(true);

        const frameElWrap = document.createElement('div');
        frameElWrap.className = 'frameWrap';
        frameElWrap.appendChild(div1);

        // button delete frame
        const delFrame = document.createElement('button');
        delFrame.className = 'delete-frame';
        delFrame.innerHTML = 'delete';
        delFrame.addEventListener('click', () => {
            frameElWrap.parentNode.removeChild(frameElWrap);
            startAnimation();
        });
        frameElWrap.appendChild(delFrame);

        // button create new frame
        const copyFrame = document.createElement('button');
        copyFrame.className = 'delete-frame';
        copyFrame.innerHTML = 'copy';
        copyFrame.addEventListener('click', () => {
            createNewFrame(frameElWrap);
        });
        frameElWrap.appendChild(copyFrame);


        const framesEl = document.getElementById('frames');
        framesEl.appendChild(frameElWrap);
    }

    startAnimation();

    document.querySelectorAll('.el').forEach((el) => {
        el.addEventListener('click', () => {
            el.style.backgroundColor = '#808080';
        });
    });
}

document.getElementById('add-frame').addEventListener('click', () => {
    createNewFrame();
});

// line fps
function changeFPS() {
    const lineFPS = document.getElementById('lineFPS').value;
    const displayFPS = document.getElementById('displayFPS');
    displayFPS.innerHTML = lineFPS + " FPS";

    numFPS = lineFPS;
    startAnimation();
}

createNewFrame();


//  html event lineFPS
document.getElementById('lineFPS').addEventListener('click', () => {
    // enterFullscreen('canvas-block-id')
    changeFPS();
});


// fullscreen mode
document.getElementById('button-fullScreen').addEventListener('click', () => {
    Object(_utils_fullscreen__WEBPACK_IMPORTED_MODULE_0__["enterFullscreen"])('canvas');
});


/***/ }),

/***/ "./src/utils/draw.js":
/*!***************************!*\
  !*** ./src/utils/draw.js ***!
  \***************************/
/*! exports provided: draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
function draw(frame) {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        frame.forEach((row, i) => {
            row.forEach((column, j) => {
                ctx.fillStyle = column;
                ctx.fillRect(j * 75, i * 75, 75, 75);
            });
        });
    }
}




/***/ }),

/***/ "./src/utils/fullscreen.js":
/*!*********************************!*\
  !*** ./src/utils/fullscreen.js ***!
  \*********************************/
/*! exports provided: enterFullscreen, exitFullscreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterFullscreen", function() { return enterFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exitFullscreen", function() { return exitFullscreen; });
// fullscreen mode

document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen;
function enterFullscreen(id) {
    const el = document.getElementById(id);

    if (el.webkitRequestFullScreen) {
        el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else {
        el.mozRequestFullScreen();
    }

    document.querySelector('#button-fullScreen').onclick = () => {
        exitFullscreen(id);
    };
}

function exitFullscreen(id) {
    document.cancelFullScreen();

    // let el = document.getElementById(id);

    document.querySelector('#button-fullScreen').onclick = () => {
        enterFullscreen(id);
    };
}



// module.exports = {enterFullscreen, exitFullscreen};


/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/index.js ./src/css/styles.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/css/styles.css */"./src/css/styles.css");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuY3NzPzhlODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kcmF3LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9mdWxsc2NyZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUEsVUFBVSxnQ0FBZ0M7QUFDMkI7QUFDakM7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksd0RBQUk7QUFDaEI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBLElBQUkseUVBQWU7QUFDbkIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xORDtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOztBQUVjOzs7Ozs7Ozs7Ozs7O0FDZmQ7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHeUM7QUFDekMscUJBQXFCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBjb25zdCB7ZW50ZXJGdWxsc2NyZWVuLCBleGl0RnVsbHNjcmVlbn0gPSByZXF1aXJlKCcuLi9zcmMvdXRpbHMvZnVsbHNjcmVlbi5qcycpO1xuaW1wb3J0IHsgZW50ZXJGdWxsc2NyZWVuLCBleGl0RnVsbHNjcmVlbiB9IGZyb20gJy4vdXRpbHMvZnVsbHNjcmVlbic7XG5pbXBvcnQgeyBkcmF3IH0gZnJvbSAnLi91dGlscy9kcmF3JztcblxubGV0IG51bUZQUyA9IDE7XG5sZXQgaW50ZXJ2YWw7XG5sZXQgY291bnQgPSAwO1xuXG4vLyBhZGQgaW50ZXJhY3Rpdml0eSB0byBwaXhlbHNcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbCcpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICB9KTtcbn0pO1xuXG5cbmNvbnN0IGRvbUZyYW1lTWF0Y2hlciA9IFtcbiAgICBbWycuZWwxJ10sIFsnLmVsMiddLCBbJy5lbDMnXV0sXG4gICAgW1snLmVsNCddLCBbJy5lbDUnXSwgWycuZWw2J11dLFxuICAgIFtbJy5lbDcnXSwgWycuZWw4J10sIFsnLmVsOSddXSxcbl07XG5cblxuY29uc3QgZ2V0RnJhbWVzID0gKGRvbUZyYW1lcykgPT4ge1xuICAgIGNvbnN0IGZyYW1lcyA9IFtdO1xuXG4gICAgZG9tRnJhbWVzLmZvckVhY2goKGRvbUZyYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gZG9tRnJhbWVNYXRjaGVyLm1hcChyb3cgPT4gcm93Lm1hcChjb2x1bW4gPT4gY29sdW1uLm1hcCgocGl4ZWxTZWxlY3RvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZG9tUGl4ZWwgPSBkb21GcmFtZS5xdWVyeVNlbGVjdG9yKHBpeGVsU2VsZWN0b3IpO1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZG9tUGl4ZWwpLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgfSkpKTtcblxuICAgICAgICBmcmFtZXMucHVzaChmcmFtZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnJhbWVzO1xufTtcblxuXG5jb25zdCBzdGFydEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBmcmFtZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnJhbWUxJyk7XG5cbiAgICBjb25zdCBkb21GcmFtZXMgPSBbLi4uZnJhbWUxXTtcblxuICAgIC8vIHN0b3AgaW50ZXJ2YWxcbiAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgIGlmIChudW1GUFMgIT09IDApIHtcbiAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmcmFtZXMgPSBnZXRGcmFtZXMoZG9tRnJhbWVzKTtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZnJhbWVzW2NvdW50ICUgZG9tRnJhbWVzLmxlbmd0aF07XG5cbiAgICAgICAgICAgIGRyYXcoZnJhbWUpO1xuICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgfSwgMTAwMCAvIG51bUZQUyk7XG4gICAgfVxufTtcblxuXG5mdW5jdGlvbiBjcmVhdGVOZXdGcmFtZShleGlzdGluZ0ZyYW1lKSB7XG4gICAgaWYgKGV4aXN0aW5nRnJhbWUgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIHdyYXBwZXIgb2YgZnJhbWUgd2l0aCBidXR0b24gZGVsZXRlIGFuZCBjb3B5XG4gICAgICAgIGNvbnN0IGZyYW1lRWxXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZyYW1lRWxXcmFwLmNsYXNzTmFtZSA9ICdmcmFtZVdyYXAnO1xuXG4gICAgICAgIGNvbnN0IGZyYW1lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZnJhbWVFbC5jbGFzc05hbWUgPSAnZnJhbWUxJztcblxuICAgICAgICBsZXQgZnJhbWVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZnJhbWVSb3cuY2xhc3NOYW1lID0gJ2ZyYW1lLXJvdyc7XG5cbiAgICAgICAgbGV0IHBpeEVsZW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBpeEVsZW1lbnQxLmNsYXNzTmFtZSA9ICdlbDEgZWwnO1xuICAgICAgICBsZXQgcGl4RWxlbWVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGl4RWxlbWVudDIuY2xhc3NOYW1lID0gJ2VsMiBlbCc7XG4gICAgICAgIGxldCBwaXhFbGVtZW50MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwaXhFbGVtZW50My5jbGFzc05hbWUgPSAnZWwzIGVsJztcblxuICAgICAgICBmcmFtZVJvdy5hcHBlbmRDaGlsZChwaXhFbGVtZW50MSk7XG4gICAgICAgIGZyYW1lUm93LmFwcGVuZENoaWxkKHBpeEVsZW1lbnQyKTtcbiAgICAgICAgZnJhbWVSb3cuYXBwZW5kQ2hpbGQocGl4RWxlbWVudDMpO1xuXG4gICAgICAgIGZyYW1lRWwuYXBwZW5kQ2hpbGQoZnJhbWVSb3cpO1xuXG5cbiAgICAgICAgZnJhbWVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZnJhbWVSb3cuY2xhc3NOYW1lID0gJ2ZyYW1lLXJvdyc7XG5cbiAgICAgICAgcGl4RWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGl4RWxlbWVudDEuY2xhc3NOYW1lID0gJ2VsNCBlbCc7XG4gICAgICAgIHBpeEVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBpeEVsZW1lbnQyLmNsYXNzTmFtZSA9ICdlbDUgZWwnO1xuICAgICAgICBwaXhFbGVtZW50MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwaXhFbGVtZW50My5jbGFzc05hbWUgPSAnZWw2IGVsJztcblxuICAgICAgICBmcmFtZVJvdy5hcHBlbmRDaGlsZChwaXhFbGVtZW50MSk7XG4gICAgICAgIGZyYW1lUm93LmFwcGVuZENoaWxkKHBpeEVsZW1lbnQyKTtcbiAgICAgICAgZnJhbWVSb3cuYXBwZW5kQ2hpbGQocGl4RWxlbWVudDMpO1xuXG4gICAgICAgIGZyYW1lRWwuYXBwZW5kQ2hpbGQoZnJhbWVSb3cpO1xuXG5cbiAgICAgICAgZnJhbWVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZnJhbWVSb3cuY2xhc3NOYW1lID0gJ2ZyYW1lLXJvdyc7XG5cbiAgICAgICAgcGl4RWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGl4RWxlbWVudDEuY2xhc3NOYW1lID0gJ2VsNyBlbCc7XG4gICAgICAgIHBpeEVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBpeEVsZW1lbnQyLmNsYXNzTmFtZSA9ICdlbDggZWwnO1xuICAgICAgICBwaXhFbGVtZW50MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwaXhFbGVtZW50My5jbGFzc05hbWUgPSAnZWw5IGVsJztcblxuICAgICAgICBmcmFtZVJvdy5hcHBlbmRDaGlsZChwaXhFbGVtZW50MSk7XG4gICAgICAgIGZyYW1lUm93LmFwcGVuZENoaWxkKHBpeEVsZW1lbnQyKTtcbiAgICAgICAgZnJhbWVSb3cuYXBwZW5kQ2hpbGQocGl4RWxlbWVudDMpO1xuXG4gICAgICAgIGZyYW1lRWwuYXBwZW5kQ2hpbGQoZnJhbWVSb3cpO1xuXG5cbiAgICAgICAgZnJhbWVFbFdyYXAuYXBwZW5kQ2hpbGQoZnJhbWVFbCk7XG5cbiAgICAgICAgLy8gYnV0dG9uIGRlbGV0ZSBmcmFtZVxuICAgICAgICBjb25zdCBkZWxGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxGcmFtZS5jbGFzc05hbWUgPSAnZGVsZXRlLWZyYW1lJztcbiAgICAgICAgZGVsRnJhbWUuaW5uZXJIVE1MID0gJ2RlbGV0ZSc7XG4gICAgICAgIGRlbEZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZnJhbWVFbFdyYXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmcmFtZUVsV3JhcCk7XG4gICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgZnJhbWVFbFdyYXAuYXBwZW5kQ2hpbGQoZGVsRnJhbWUpO1xuXG4gICAgICAgIC8vIGJ1dHRvbiBjcmVhdGUgbmV3IGZyYW1lXG4gICAgICAgIGNvbnN0IGNvcHlGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb3B5RnJhbWUuY2xhc3NOYW1lID0gJ2RlbGV0ZS1mcmFtZSc7XG4gICAgICAgIGNvcHlGcmFtZS5pbm5lckhUTUwgPSAnY29weSc7XG4gICAgICAgIGNvcHlGcmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZU5ld0ZyYW1lKGZyYW1lRWxXcmFwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZyYW1lRWxXcmFwLmFwcGVuZENoaWxkKGNvcHlGcmFtZSk7XG5cbiAgICAgICAgY29uc3QgZnJhbWVzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhbWVzJyk7XG4gICAgICAgIGZyYW1lc0VsLmFwcGVuZENoaWxkKGZyYW1lRWxXcmFwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmcmFtZUVsQ2xvbmUgPSBleGlzdGluZ0ZyYW1lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZyYW1lMScpWzBdO1xuICAgICAgICBjb25zdCBkaXYxID0gZnJhbWVFbENsb25lLmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgICBjb25zdCBmcmFtZUVsV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmcmFtZUVsV3JhcC5jbGFzc05hbWUgPSAnZnJhbWVXcmFwJztcbiAgICAgICAgZnJhbWVFbFdyYXAuYXBwZW5kQ2hpbGQoZGl2MSk7XG5cbiAgICAgICAgLy8gYnV0dG9uIGRlbGV0ZSBmcmFtZVxuICAgICAgICBjb25zdCBkZWxGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxGcmFtZS5jbGFzc05hbWUgPSAnZGVsZXRlLWZyYW1lJztcbiAgICAgICAgZGVsRnJhbWUuaW5uZXJIVE1MID0gJ2RlbGV0ZSc7XG4gICAgICAgIGRlbEZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZnJhbWVFbFdyYXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmcmFtZUVsV3JhcCk7XG4gICAgICAgICAgICBzdGFydEFuaW1hdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgZnJhbWVFbFdyYXAuYXBwZW5kQ2hpbGQoZGVsRnJhbWUpO1xuXG4gICAgICAgIC8vIGJ1dHRvbiBjcmVhdGUgbmV3IGZyYW1lXG4gICAgICAgIGNvbnN0IGNvcHlGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb3B5RnJhbWUuY2xhc3NOYW1lID0gJ2RlbGV0ZS1mcmFtZSc7XG4gICAgICAgIGNvcHlGcmFtZS5pbm5lckhUTUwgPSAnY29weSc7XG4gICAgICAgIGNvcHlGcmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZU5ld0ZyYW1lKGZyYW1lRWxXcmFwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZyYW1lRWxXcmFwLmFwcGVuZENoaWxkKGNvcHlGcmFtZSk7XG5cblxuICAgICAgICBjb25zdCBmcmFtZXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZXMnKTtcbiAgICAgICAgZnJhbWVzRWwuYXBwZW5kQ2hpbGQoZnJhbWVFbFdyYXApO1xuICAgIH1cblxuICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWwnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODA4MDgwJztcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtZnJhbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjcmVhdGVOZXdGcmFtZSgpO1xufSk7XG5cbi8vIGxpbmUgZnBzXG5mdW5jdGlvbiBjaGFuZ2VGUFMoKSB7XG4gICAgY29uc3QgbGluZUZQUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5lRlBTJykudmFsdWU7XG4gICAgY29uc3QgZGlzcGxheUZQUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5RlBTJyk7XG4gICAgZGlzcGxheUZQUy5pbm5lckhUTUwgPSBsaW5lRlBTICsgXCIgRlBTXCI7XG5cbiAgICBudW1GUFMgPSBsaW5lRlBTO1xuICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG59XG5cbmNyZWF0ZU5ld0ZyYW1lKCk7XG5cblxuLy8gIGh0bWwgZXZlbnQgbGluZUZQU1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmVGUFMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBlbnRlckZ1bGxzY3JlZW4oJ2NhbnZhcy1ibG9jay1pZCcpXG4gICAgY2hhbmdlRlBTKCk7XG59KTtcblxuXG4vLyBmdWxsc2NyZWVuIG1vZGVcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tZnVsbFNjcmVlbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVudGVyRnVsbHNjcmVlbignY2FudmFzJyk7XG59KTtcbiIsImZ1bmN0aW9uIGRyYXcoZnJhbWUpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cbiAgICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgZnJhbWUuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sdW1uLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoaiAqIDc1LCBpICogNzUsIDc1LCA3NSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQge2RyYXd9O1xuIiwiLy8gZnVsbHNjcmVlbiBtb2RlXG5cbmRvY3VtZW50LmNhbmNlbEZ1bGxTY3JlZW4gPSBkb2N1bWVudC5jYW5jZWxGdWxsU2NyZWVuIHx8IGRvY3VtZW50LndlYmtpdENhbmNlbEZ1bGxTY3JlZW47XG5mdW5jdGlvbiBlbnRlckZ1bGxzY3JlZW4oaWQpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICAgIGlmIChlbC53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgICBlbC53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbihFbGVtZW50LkFMTE9XX0tFWUJPQVJEX0lOUFVUKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tZnVsbFNjcmVlbicpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGV4aXRGdWxsc2NyZWVuKGlkKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBleGl0RnVsbHNjcmVlbihpZCkge1xuICAgIGRvY3VtZW50LmNhbmNlbEZ1bGxTY3JlZW4oKTtcblxuICAgIC8vIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tZnVsbFNjcmVlbicpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGVudGVyRnVsbHNjcmVlbihpZCk7XG4gICAgfTtcbn1cblxuXG5leHBvcnQge2VudGVyRnVsbHNjcmVlbiwgZXhpdEZ1bGxzY3JlZW59O1xuLy8gbW9kdWxlLmV4cG9ydHMgPSB7ZW50ZXJGdWxsc2NyZWVuLCBleGl0RnVsbHNjcmVlbn07XG4iXSwic291cmNlUm9vdCI6IiJ9