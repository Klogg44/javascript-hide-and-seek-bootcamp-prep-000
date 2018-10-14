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
  childslist = document.querySelectorAll('div#grand-node');

  for (let i = 0; i < childslist; i++) {
    let childchild = childslist[i].innerHTML;
    console.log(childchild);
  }
  return null;
}
