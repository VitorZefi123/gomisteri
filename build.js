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

  <!-- ═══ SEO KRYESOR ═══ -->
  <title>Gomisteri Rrugore e Shpejtë – Shërbim 24H | Kodër Kamëz, Tiranë</title>
  <meta name="description" content="Gomisteri rrugore me shërbim 24 orë në Tiranë. Vijmë aty ku je ti — ndërrimi gomave, riparim, balancim. Kontakt: +355 68 489 3745. Institut Bujqësor, Kodër Kamëz." />
  <meta name="keywords" content="gomisteri tiranë, gomisteri rrugore, ndërrimi gomave tiranë, riparim gome, gomisteri 24 ore, shërbim gomash, goma tiranë, gomisteri kodër kamëz, gomisteri shqipëri, balancim gome" />
  <meta name="author" content="Gomisteri Rrugore e Shpejtë" />
  <meta name="robots" content="index, follow" />
  <meta name="google-site-verification" content="szbjmww4fMriqbn0AXP_KKMAMWr-uJKrE9AFaINVFw4" />
  <meta name="google-site-verification" content="xqp0sFY7VoQhAZBt5WeH2C2hXmsK5A-G9I4a9rMOfhg" />
  <link rel="canonical" href="https://www.gomisterirrugoreshpejte.com/" />

  <!-- ═══ OPEN GRAPH (Facebook / WhatsApp preview) ═══ -->
  <meta property="og:type"        content="business.business" />
  <meta property="og:title"       content="Gomisteri Rrugore e Shpejtë – Shërbim 24H" />
  <meta property="og:description" content="Vijmë aty ku je ti! Ndërrimi gomave, riparim dhe balancim 24 orë. Tiranë – +355 68 489 3745" />
  <meta property="og:url"         content="https://www.gomisterirrugoreshpejte.com/" />
  <meta property="og:locale"      content="sq_AL" />

  <!-- ═══ SCHEMA.ORG – Local Business (Google e lexon këtë) ═══ -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Gomisteri Rrugore e Shpejtë",
    "description": "Gomisteri rrugore me shërbim 24 orë. Vijmë aty ku je ti për ndërrimin, riparimin dhe balancimin e gomave.",
    "url": "https://www.gomisterirrugoreshpejte.com/",
    "telephone": "+355684893745",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Institut Bujqësor, Kodër Kamëz",
      "addressLocality": "Tiranë",
      "addressCountry": "AL"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "areaServed": "Tiranë",
    "serviceType": ["Ndërrimi Gomave", "Riparim Gome", "Balancim", "Geometri Rrotash", "Shërbim Mobil 24H"]
  }
  </script>

  <!-- Fonts & Icons -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

  <!-- Styles -->
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
console.log('✓ Built index.html me SEO tags');
