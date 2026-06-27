const fs   = require('fs');
const path = require('path');

const sections = [
  'navbar', 'hero', 'mobile', 'services',
  'why-us', 'brands', 'contact', 'map', 'footer'
];

const shell = fs.readFileSync('index.html', 'utf8');

let output = shell.replace(
  /  <div data-section="[^"]+"><\/div>\n/g, ''
);

// Build the injected body content
const body = sections.map(name => {
  const file = path.join('sections', `${name}.html`);
  return fs.readFileSync(file, 'utf8').trim();
}).join('\n\n');

// Replace placeholder comment area + scripts with full content + scripts
output = output.replace(
  /  <!-- Sections are loaded dynamically by js\/loader\.js -->\n([\s\S]*?)  <!-- main\.js first[\s\S]*?-->\n  <script src="js\/main\.js"><\/script>\n  <script src="js\/loader\.js"><\/script>/,
  body + '\n\n  <script src="js/main-static.js"></script>'
);

fs.writeFileSync('dist.html', output, 'utf8');
console.log('✓ Built: dist.html — open directly in browser!');
