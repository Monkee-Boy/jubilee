(function() {
  'use strict';

  const tabs = document.querySelectorAll('.tabs');

  for (const tab of tabs) {
    let tabList = tab.querySelectorAll('li.tab');

    for (const tabItem of tabList) {
      tabItem.addEventListener('click', function() { tabMakeActive(this, tabList); });
    }
  }

  function tabMakeActive(element, tabList) {
    for (const tabItem of tabList) {
      tabItem.classList.remove('active');
      tabItem.children[0].classList.remove('active');
      tabItem.children[1].classList.remove('is-current');
    }

    element.classList.add('active');
    element.children[0].classList.add('active');
    element.children[1].classList.add('is-current');
  }
}());
