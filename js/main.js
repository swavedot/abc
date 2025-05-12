<<<<<<< HEAD
<<<<<<< HEAD
=======
import ipads from "../data/ipads.js";
import navigations from "../data/navigations.js";

>>>>>>> c524033 (te)
=======
>>>>>>> b986a668b9107c793cf60a6d43b215b6458380de
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
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}

// 요소가 화면에 보이는지 안보이는지 관찰 
const io = new IntersectionObserver(function(eneties){
  eneties.forEach(function(entry){
    if (!entry.isIntersecting){
      return
    }
    entry.target.classList.add('show')
  })
})
const infoEls = document.querySelectorAll('.info')
infoEls.forEach(function(el){
  io.observe(el)
})

//비디오 재생 
const video = document.querySelector('.stage video')
const playBtn = document.querySelector('.stage .controller--play')
const pauseBtn = document.querySelector('.stage .controller--pause')

playBtn.addEventListener('click', function(){
  video.play()
  playBtn.classList.add('hide')
  pauseBtn.classList.remove('hide')
})
pauseBtn.addEventListener('click', function(){
  video.pause()
  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')
})

// 당신의 선택은? 렌더링
const itemsEl = document.querySelector('section.compare .items')
ipads.forEach(function(ipad){
  const itemEl = document.createElement('div')
  itemEl.classList.add('item')

  let colorList = ''
  ipad.colors.forEach(function(color){
    colorList += `<li style="background-color:${color};"></li>` 
  })
  itemEl.innerHTML = /* html*/`
    <div class="thumbnail">
      <img src = "${ipad.thumbnail}" alt="${ipad.name}">
    </div>
    <ul class="colors">
      ${colorList}
    </ul>
    <h3 class="name">${ipad.name}</h3>
    <p class="tagline">${ipad.tagline}</p>  
    <p class="price">₩${ipad.price.toLocaleString('en-US')}부터</p>
    <button class='btn'>구입하기</button>
    <a href="${ipad.url}" class="link">더 알아보기</a>  
  `

  itemsEl.append(itemEl)
})

// navi
const navigationsEl = document.querySelector('footer .navigations')
navigations.forEach(function(nav){
  const mapEl = document.createElement('div')
  mapEl.classList.add('map')

  let mapList = ''
  nav.maps.forEach(function(map){
    mapList += /* html*/`
      <li>
        <a href="${map.url}">${map.name}</a>
      </li>
      `
  })

  mapEl.innerHTML = /* html*/`
    <h3>
      <span class='text'>${nav.title}</span>
    </h3>
    <ul>
       ${mapList}
    </ul>
  `
  navigationsEl.append(mapEl)
})

// 현재년도 
const thisyear = document.querySelector('span.this-year')
thisyear.textContent = new Date().getFullYear()
>>>>>>> c524033 (te)
=======
}
>>>>>>> b986a668b9107c793cf60a6d43b215b6458380de
