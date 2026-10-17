document.addEventListener('DOMContentLoaded', function () {

  /* Back to top button */
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('show', window.scrollY > 400);
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Quantity steppers */
  document.querySelectorAll('.qty-stepper').forEach(function (stepper) {
    var input = stepper.querySelector('input');
    stepper.querySelectorAll('.qty-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var val = parseInt(input.value, 10) || 1;
        var min = parseInt(input.min, 10) || 1;
        if (btn.dataset.action === 'increase') {
          val++;
        } else if (val > min) {
          val--;
        }
        input.value = val;
      });
    });
  });

  /* Product gallery thumbnail swap */
  document.querySelectorAll('.pd-thumb-list img').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var mainImg = document.querySelector('.pd-main-img img');
      if (!mainImg) return;
      document.querySelectorAll('.pd-thumb-list img').forEach(function (t) { t.classList.remove('active'); });
      thumb.classList.add('active');
      mainImg.setAttribute('src', thumb.getAttribute('src'));
    });
  });

  /* Countdown timer (coming soon page) */
  var countdownEl = document.querySelector('.countdown');
  if (countdownEl) {
    var target = new Date();
    target.setMonth(target.getMonth() + 2);
    target.setDate(target.getDate() + 22);

    var monthsEl = document.getElementById('cd-months');
    var daysEl = document.getElementById('cd-days');
    var hoursEl = document.getElementById('cd-hours');
    var minsEl = document.getElementById('cd-minutes');
    var secsEl = document.getElementById('cd-seconds');

    function pad(n) { return String(n).padStart(2, '0'); }

    function tick() {
      var now = new Date();
      var diff = Math.max(0, target - now);

      var seconds = Math.floor(diff / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);
      var months = Math.floor(days / 30);

      if (monthsEl) monthsEl.textContent = pad(months);
      if (daysEl) daysEl.textContent = pad(days % 30);
      if (hoursEl) hoursEl.textContent = pad(hours % 24);
      if (minsEl) minsEl.textContent = pad(minutes % 60);
      if (secsEl) secsEl.textContent = pad(seconds % 60);
    }

    tick();
    setInterval(tick, 1000);
  }

  /* Bootstrap form validation styling (contact / checkout / auth forms) */
  document.querySelectorAll('form.needs-validation').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopPropagation();
      form.classList.add('was-validated');
    });
  });

});
