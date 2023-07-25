import $ from 'jquery';

$(document).on('click', '#help', () => {
  window.location.href = 'help.html';
});

$(document).on('click', '#questiongen', () => {
  window.location.href = 'questiongenerator.html';
});

$(document).on('click', '#paraphrasegen', () => {
  window.location.href = 'paraphrasegenerator.html';
});

$(document).on('click', '#about', () => {
  window.location.href = 'index.html';
});

$(document).on('click', '#show', () => {
  window.location.href = 'show.html';
});

// $(document).on('click', '#edit', () => {
//   window.location.href = 'questiongenerator.html';
// });
