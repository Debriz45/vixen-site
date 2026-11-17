document.addEventListener('DOMContentLoaded', function () {
  var items  = document.querySelectorAll('.testi-item');
  var quote  = document.getElementById('quote-text');
  var name   = document.getElementById('quote-name');
  var avatar = document.getElementById('quote-avatar');

  if (!items.length || !quote || !name || !avatar) return;

  items.forEach(function (item) {
    item.addEventListener('click', function () {
      items.forEach(function (i) {
        i.classList.remove('is-active');
        i.setAttribute('aria-selected', 'false');
      });

      item.classList.add('is-active');
      item.setAttribute('aria-selected', 'true');

      quote.textContent  = '"' + item.dataset.quote + '”';
      name.textContent   = item.dataset.name;
      avatar.src         = item.dataset.avatar;
      avatar.alt         = item.dataset.name;
    });
  });
});