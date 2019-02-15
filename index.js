function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('div#nested div.target');
}
function increaseRankBy(n) {
  var rank = document.querySelector('ul.ranked-list li')
  rank = parseInt(rank) + n
}
