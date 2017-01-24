(function() {
  'use strict';

  const tabs = document.querySelector('#tabs');
  const tabList = tabs.querySelectorAll('li.tab');

  // Change active tab on click

  const makeActive = function() {

    tabList.forEach(function(element) {
      element.classList.remove('active');
      element.children[0].classList.remove('active');
      element.children[1].classList.remove('is-open');
    })

    this.classList.add('active');
    this.children[0].classList.add('active');
    this.children[1].classList.add('is-open');
  }

  for (const tab of tabList) {
    tab.addEventListener('click', makeActive);
  }

}());
