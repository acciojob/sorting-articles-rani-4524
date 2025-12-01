const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Remove A, AN, THE
const strip = band => band.replace(/^(the |an |a )/i, '');

const sorted = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// Render
document.querySelector('#band').innerHTML =
  sorted.map(b => `<li>${b}</li>`).join('');
