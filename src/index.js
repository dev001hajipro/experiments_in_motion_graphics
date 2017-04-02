var c = document.getElementById('c');
var ctx = c.getContext('2d');
var width = window.innerWidth;
var height = window.innerHeight;
c.width = width;
c.height = height;
c.style.width = c.width + 'px';
c.style.height = c.height  + 'px';


var t = 0;
const x11 = (t) => Math.sin(t / 10) * 100 + Math.sin(t / 5) * 20;
const y11 = (t) => Math.cos(-t / 10) * 100 + Math.sin(t/5) * 50;
const x21 = (t) => Math.sin(t / 10) * 200 + Math.sin(t) * 2;
const y21 = (t) => -Math.cos(t / 20) * 200 + Math.cos(t / 12) * 20;
const NUM_LINES = 20;

function setup() {
    // bloom.
    ctx.shadowBlur = 3;
    ctx.shadowColor = '#fff';

    // point style
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
}

function point(x, y, ctx) {
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI, true);
    ctx.stroke();
}

function line(x1, y1, x2, y2, ctx) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.stroke();
}

function loop() {
    window.requestAnimationFrame(loop);

    // clear screen
    ctx.fillStyle = 'rgba(0,0,0, 1)';
    ctx.fillRect(0, 0, width, height);

    ctx.translate(width/2, height/2);

    //point(x11(t), y11(t), ctx);
    //point(x21(t), y21(t), ctx);

    for (let i = 0; i < NUM_LINES; i++) {
        line(x11(t + i), y11(t + i), x21(t + i), y21(t + i), ctx);
    }

    ctx.translate(-width/2, -height/2);

    t += 0.5;
}

setup();
loop();