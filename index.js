function getFirstSelector (selector) {
  return document.querySelector(selector);
}

function nestedTarget () {
  return document.querySelector('#nested .target');
}

function increaseRankBy (n) {
  const rlist = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < rlist.length; i++) {
    console.log((parseInt(rlist[i].innerHTML) + n))
    //rlist[i].innerHTML = parseInt(rlist[i].innerHTML) + parseInt(n);
  }
  return;
}
