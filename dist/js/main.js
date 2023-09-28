
  // Обновить сайт (Reload)
  function refresh()
    {
        window.location.reload();
    }
    // onclick="refresh()" вставить в див



  //swiper сладйер - доделать под макет  
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });



  //Burger-menu  - Доделать
  let burgerMenu = document.querySelector('.header-burger')
  let burgerActive = document.querySelector('.header-burger-active')
  let list = document.querySelector('.header-menu')
  let listActive = document.querySelector('.header-menu-active')
  let burgerMenuIcon = document.querySelector('.header-burger_menu')
  let burgerMenuIconActive = document.querySelector('.header-burger_menu-active')
  let closePassive = document.querySelector('.header-burger_close')
  let closeActive = document.querySelector('.header-burger_close-active')

  burgerMenuIcon.addEventListener('click' , function() {
    burgerMenu.classList.toggle('header-burger-active')
    list.classList.toggle('header-menu-active')
    burgerMenuIcon.classList.toggle('header-burger_menu-active')
    document.querySelector('body').classList.toggle('body-active')
    closePassive.classList.toggle('header-burger_close-active')
  })

  // closePassive.addEventListener('click' , function() {
  //   burgerMenu.classList.remove('header-burger-active')
  // })


  //Tabs Премьеры
  // let upcomingBtn = document.querySelector('.poster-smurf__text-active')
  // let soonBtn = document.querySelector('.poster-smurf__text-disable')

  // soonBtn.addEventListener('click' , function() {
  // soonBtn.classList.remove('poster-smurf__text-disable')
  //   if(soonBtn.className !== "poster-smurf__text-disable") {
  //     upcomingBtn.classList.add('poster-smurf__text-disable')
  //   } else {
  //     soonBtn.classList.add('poster-snurf__text-disabled')
  //     upcomingBtn.classList.remove("poster-smurf__text-disabled")
  //     }
  // })

  let premiereBtn = document.querySelectorAll('.poster-smurf__text')
  let collage = document.querySelectorAll('.smurf-items')

  collage[0].classList.add('smurf-soon')
 
  for (let i = 0; i < premiereBtn.length; i++) {
    premiereBtn[i].addEventListener('click' , function(e) {      
      for (let a = 0; a < premiereBtn.length; a++) {
        premiereBtn[a].classList.add('poster-smurf__text-disable')
        collage[a].classList.remove('smurf-soon')
      }
      collage[i].classList.add('smurf-soon')
      e.target.classList.remove('poster-smurf__text-disable')
    })
  }


  // Swiper Всё меню (Кнопка) - Работает 
  let menuAll = document.querySelector('.kitchen-menu_a')
  let itemMenu = document.querySelectorAll('.swiper-slide')
  
  menuAll.addEventListener('click' , function() {
    itemMenu.forEach(function(e) {
      e.classList.toggle('visible-item')
      if(e.classList.toggle('visible-item"'))
      {
        menuAll.textContent = 'Скрыть'
      } else {
        menuAll.textContent = 'Всё меню'
      }
    })
  })




  // TABS 

  // let premiereBtn = document.querySelectorAll('.poster-smurf__text')
  // let collage = document.querySelectorAll('.smurf-items')

  // collage[0].classList.add('smurf-soon')
 
  // for (let i = 0; i < premiereBtn.length; i++) {
  //   premiereBtn[i].addEventListener('click' , function(e) {      
  //     for (let a = 0; a < premiereBtn.length; a++) {
  //       premiereBtn[a].classList.add('poster-smurf__text-disable')
  //       collage[a].classList.remove('smurf-soon')
  //     }
  //     collage[i].classList.add('smurf-soon')
  //     e.target.classList.remove('poster-smurf__text-disable')
  //   })
  // }

let tabItem = document.querySelectorAll('.tabs-block')
let tabList = document.querySelectorAll('.wrapper-list')

tabItem[0].classList.add('tabs-block-active')
tabList[0].classList.remove('wrapper-list-hidden')

tabItem.forEach(function (e) {
  e.addEventListener('click' , function(){
    e.classList.toggle('tabs-block-active')
    // target.classList.toggle('wrapper-list-hidden')
  }) 
})

