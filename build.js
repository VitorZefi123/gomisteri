const fs   = require('fs');
const path = require('path');

const sections = [
  'navbar', 'hero', 'mobile', 'services',
  'why-us', 'brands', 'contact', 'map', 'footer'
];

const sectionHTML = sections.map(name => {
  const file = path.join('sections', `${name}.html`);
  const content = fs.readFileSync(file, 'utf8').trim();
  return content ? content : '';
}).filter(Boolean).join('\n\n');

const output = `<!DOCTYPE html>
<html lang="sq">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gomisteri Rrugore e Shpejtë – Shërbim 24H</title>

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

  <link rel="stylesheet" href="css/base.css" />
  <link rel="stylesheet" href="css/navbar.css" />
  <link rel="stylesheet" href="css/hero.css" />
  <link rel="stylesheet" href="css/mobile.css" />
  <link rel="stylesheet" href="css/services.css" />
  <link rel="stylesheet" href="css/why-us.css" />
  <link rel="stylesheet" href="css/brands.css" />
  <link rel="stylesheet" href="css/contact.css" />
  <link rel="stylesheet" href="css/footer.css" />
  <link rel="stylesheet" href="css/responsive.css" />
</head>
<body>

${sectionHTML}

<script src="js/main-static.js"></script>
</body>
</html>
`;

fs.writeFileSync('index.html', output, 'utf8');
console.log('✓ Built index.html nga ' + sections.length + ' seksione');
