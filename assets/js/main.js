(function() {
  const VALUES = {
    speed: 1500,
    numberOfCuts: 1004,
    countdown: 10,
  }
  const _$ = {
    ready: document.querySelector('.ready'),
    counterWrapper: document.querySelector('.counterWrapper'),
    counter: document.querySelector('.counter'),
    countdownWrapper: document.querySelector('.countdownWrapper'),
    countdownCounter: document.querySelector('.countdownCounter'),
    done: document.querySelector('.done'),
  }

  function _countdown() {
    window.setTimeout(() => {
      _$.countdownWrapper.setAttribute("hidden", true);
      _start();
      clearInterval(countdownInterval);
    }, VALUES.countdown * VALUES.speed);

    _$.countdownWrapper.removeAttribute("hidden");
    _$.countdownCounter.innerText = VALUES.countdown;
    VALUES.countdown--;

    function _interval() {
      console.log(VALUES.countdown);
      _$.countdownCounter.innerText = VALUES.countdown;

      VALUES.countdown--;
    }

    const countdownInterval = window.setInterval(_interval, VALUES.speed);
  }

  function _start() {
    window.setTimeout(() => {
      _$.counterWrapper.setAttribute("hidden", true);
      _$.done.removeAttribute("hidden");

      clearInterval(cutsInterval);
    }, VALUES.numberOfCuts * VALUES.speed);

    _$.ready.setAttribute("hidden", true);
    _$.counter.innerText = VALUES.numberOfCuts;
    VALUES.numberOfCuts--;
    _$.counterWrapper.removeAttribute("hidden");

    const cutsInterval = window.setInterval(() => {
      _$.counter.innerText = VALUES.numberOfCuts;

      if (VALUES.numberOfCuts > 0) {
        VALUES.numberOfCuts--;
      }
    }, VALUES.speed);
  }

  function _addEventListeners() {
    _$.ready.addEventListener('click', (event) => {
      event.preventDefault();
      _$.ready.setAttribute("hidden", true);
      _countdown();
    })
  }

  function _init() {
    _addEventListeners();
  }

  _init();

})();