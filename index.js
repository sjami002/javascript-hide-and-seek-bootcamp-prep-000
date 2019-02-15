function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('div#nested div.target');
}
function increaseRankBy(n) {
  var rank = document.querySelectorAll('ul.ranked-list li').innerHTML;
  return parseInt(rank + n)
}
