function getFirstSelector (selector) {
  return document.querySelector(selector);
}

function nestedTarget () {
  return document.querySelector('#nested .target');
}

function increaseRankBy (n) {
  const rlist = document.querySelectorAll('.ranked-list li');

  for (let i = 0; i < rlist.length; i++) {
    rlist[i].innerHTML = parseInt(rlist[i].innerHTML) + n
  }
  return;
}

function deepestChild () {
  const childs = document.querySelectorAll('div#grand-node div');

  for (let i = 0; i < childs.length; i++) {
    if (childs[i].querySelectorAll('div').length === 0) {
      return childs[i];
    };
  }
  return null;
}
