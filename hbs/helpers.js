const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (text) => {
    let palabras = text.split(' ');
    palabras.forEach((p, idx) => {
        palabras[idx] = p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});