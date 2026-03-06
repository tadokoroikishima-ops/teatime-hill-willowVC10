// Terra’s Finest - script.js

function toggleSb(head) {
const body = head.nextElementSibling;
const arrow = head.querySelector(’.arrow’);
if (body.classList.contains(‘collapsed’)) {
body.classList.remove(‘collapsed’);
arrow.textContent = ‘▼’;
} else {
body.classList.add(‘collapsed’);
arrow.textContent = ‘▲’;
}
}

document.addEventListener(‘DOMContentLoaded’, function() {
const container = document.getElementById(‘autoGallery’);
const section = document.getElementById(‘gallerySection’);
if (!container) return;
let found = 0;
for (let i = 1; i <= 100; i++) {
(function(n) {
const img = new Image();
img.onload = function() {
const el = document.createElement(‘img’);
el.src = ‘images/gallery-’ + n + ‘.jpg’;
el.alt = ’Gallery image ’ + n;
el.loading = ‘lazy’;
container.appendChild(el);
found++;
};
img.onerror = function() {
if (n === 1 && found === 0 && section) section.style.display = ‘none’;
};
img.src = ‘images/gallery-’ + n + ‘.jpg’;
})(i);
}
});
