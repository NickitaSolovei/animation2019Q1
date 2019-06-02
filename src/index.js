// const {enterFullscreen, exitFullscreen} = require('../src/utils/fullscreen.js');
import { enterFullscreen, exitFullscreen } from './utils/fullscreen';
import { draw } from './utils/draw';

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

            draw(frame);
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
    enterFullscreen('canvas');
});
