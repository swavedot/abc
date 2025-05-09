// 장바구니
const basketsEl = document.querySelector('header .basket-s');
const basketEl = basketsEl.querySelector('.basket');

basketsEl.addEventListener('click', function(event){
  event.stopPropagation()
  // contains : 클래서가 현재 어떤상태(active, show, hidden)인지  체크할 때 사용
  // 상태에서 없을 경우 false / 있으면 true
  if(basketEl.classList.contains('show')) {
    hideBasket()
  } else {
    showBasket()
  }
});
basketEl.addEventListener('click', function(event){
  event.stopPropagation()
});

window.addEventListener('click', function(){
  hideBasket()
});

// show/hide 사용자 정의 함수 만들기
function showBasket(){
  basketEl.classList.add('show')
};
function hideBasket(){
  basketEl.classList.remove('show')
};

// 검색
const headerEl = document.querySelector('header');
// const headerMenuEls = headerEl.querySelectorAll('ul.menu > li') // foreach만 가능
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]//배열(전개연산자를 사용)
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchsEl = headerEl.querySelector('.search-s');
const closerEl = searchWrapEl.querySelector('.search-closer');
const shadowEl = searchWrapEl.querySelector('.shadow');
const searchInputEl = searchWrapEl.querySelector('input')
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')]


searchsEl.addEventListener('click', showSearch);
closerEl.addEventListener('click', hideSearch);
shadowEl.addEventListener('click', hideSearch);

// searching 함수 만들기
function showSearch() {
  headerEl.classList.add('searching');
  // documentElement : html태그 자체
  document.documentElement.classList.add('fixed');
  headerMenuEls.reverse().forEach(function(el, index){
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
  });
  searchDelayEls.forEach(function(el, index){
    el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
  });
  setTimeout(function(){
    searchInputEl.focus();
  }, 600);
}
function hideSearch() {
  headerEl.classList.remove('searching');
  document.documentElement.classList.remove('fixed');
  headerMenuEls.reverse().forEach(function(el, index){
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
  });
  searchDelayEls.reverse().forEach(function(el, index){
    el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
  });
  searchDelayEls.reverse();
  searchInputEl.value='';
}