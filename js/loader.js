// Loads each section partial into its placeholder <div data-section="...">
async function loadSections() {
  const slots = document.querySelectorAll('[data-section]');

  await Promise.all([...slots].map(async slot => {
    const name = slot.getAttribute('data-section');
    try {
      const res  = await fetch(`sections/${name}.html`);
      const html = await res.text();
      slot.outerHTML = html;
    } catch (e) {
      console.error(`Could not load section: ${name}`, e);
    }
  }));

  // Re-run main.js logic after all sections are in the DOM
  initApp();
}

loadSections();
