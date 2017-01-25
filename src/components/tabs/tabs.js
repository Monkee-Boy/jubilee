(function() {
  'use strict';

  const tabs = document.querySelectorAll('.tabs');

  for (const tab of tabs) {
    let tabList = tab.querySelectorAll('li.tab');

    // Change active tab on click
    const makeActive = function() {
      for (const tabItem of tabList) {
        tabItem.classList.remove('active');
        tabItem.children[0].classList.remove('active');
        tabItem.children[1].classList.remove('is-current');
      };

      this.classList.add('active');
      this.children[0].classList.add('active');
      this.children[1].classList.add('is-current');
    };

    for (const tabItem of tabList) {
      tabItem.addEventListener('click', makeActive);
    }
  }
}());
