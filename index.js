function getFirstSelector (selector) {
  return document.querySelector(selector);
}

function nestedTarget () {
  return document.querySelector('#nested .target');
}

function increaseRankBy (n) {
  const rlist = document.querySelector('.ranked-list');

  for (let i = 0; i < rlist.length; i++) {
    rlist[i].innerHTML = rlist[i].innerHTML + parseInt(n);
  }
  return;
}


