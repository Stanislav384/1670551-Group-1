const circle = document.querySelector('.upgrade-circle-container-dec-3');
const marker = document.querySelector('.marker');

// Керування сектором
function setSector(start, sweep) {
    circle.style.setProperty('--sector-start', `${start}deg`);
    circle.style.setProperty('--sector-sweep', `${sweep}deg`);
}

// Керування маркером
function setMarker(angle) {
    marker.style.transform =
    `rotate(${angle}deg) translate(150px)`;
}

setSector(135, 90);
setMarker(0);

let rot = 0;
let speed = 10;
let speedlos = 0;
function rot_rot() {
    if (speed > 0) {
    rot += speed;
    speed -= speedlos;
    setMarker(rot);
    setTimeout(rot_rot, 100);
    }
}
rot_rot();