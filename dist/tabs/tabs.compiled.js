'use strict';

(function () {
  'use strict';

  var tabs = document.querySelector('#tabs');
  var tabList = tabs.querySelectorAll('li.tab');

  // Change active tab on click

  var makeActive = function makeActive() {

    tabList.forEach(function (element) {
      element.classList.remove('active');
      element.children[0].classList.remove('active');
      element.children[1].classList.remove('is-open');
    });

    this.classList.add('active');
    this.children[0].classList.add('active');
    this.children[1].classList.add('is-open');
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tabList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var tab = _step.value;

      tab.addEventListener('click', makeActive);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
})();