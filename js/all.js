
const changeBtn = document.querySelectorAll('.changeBtn')
const goodFace1 = document.querySelector('.thing08-3')
const goodFace2 = document.querySelector('.thing08-4')
const badFace = document.querySelector('.thing08-5')
const whiteBg = document.querySelector('.whiteBg')
// let show = 0;
changeBtn.forEach(item => {
  item.addEventListener('click', () => {
    // if (show === 0) { 
      whiteBg.classList.add('change--show')
      setTimeout(() => {
        whiteBg.classList.remove('change--show')
        goodFace1.classList.add('change--show')
        goodFace2.classList.add('change--show')
        badFace.classList.add('change--close')
      }, 750);
      setTimeout(() => {
        goodFace1.classList.remove('change--show')
        goodFace2.classList.remove('change--show')
        badFace.classList.remove('change--close')
      }, 2750);

      // show++ 
    // }
  })
})

// OFFER

data = [
  {
    clickNum: 1,
    priceImg: "./images/offer/offer01/offerPrice01-2.png",
    saleImg: "./images/offer/offer01/offerSale01-2.png",
  },
  {
    clickNum: 1,
    priceImg: "./images/offer/offer02/offerPrice02-2.png",
    saleImg: "./images/offer/offer02/offerSale02-2.png",
  },
  {
    clickNum: 1,
    priceImg: "./images/offer/offer03/offerPrice03-2.png",
    saleImg: "./images/offer/offer03/offerSale03-2.png",
  },
  {
    clickNum: 1,
    priceImg: "./images/offer/offer04/offerPrice04-2.png",
    saleImg: "./images/offer/offer04/offerSale04-2.png",
  },
];

let count = 0;
const offerBtnControl = document.querySelectorAll(".offerBtnControl");
console.log(offerBtnControl);
offerBtnControl.forEach((item, ind) => {
  item.addEventListener("click", (e) => {
    console.log(item, ind);
    e.preventDefault();
    const priceChange = document.querySelector(`.priceChange0${ind + 1} img`);
    const price_1 = document.querySelector(`.offerPrice0${ind + 1}-1`);
    const saleChange = document.querySelector(`.saleChange0${ind + 1}`);
    const sale_1 = document.querySelector(`.offerSale0${ind + 1}-1`);
    const money_1 = document.querySelector(`.offerBtn0${ind + 1}-1`);
    const hand = document.querySelector(`.hand0${ind + 1}`);
    const formAdd = document.querySelector("#lp_form");
    const navBar = document.querySelector(".navControl");

    function test(num) {
      hand.classList.add("offer-close");
      priceChange.classList.add("priceChange--show");
      saleChange.classList.remove("offer-close");
      const priceImg = data[num].priceImg;
      const saleImg = data[num].saleImg;
      setTimeout(() => {
        priceChange.classList.remove("priceChange--show");
        price_1.src = priceImg;
        saleChange.classList.add("offer-close");
        sale_1.src = saleImg;
      }, 400);
      money_1.classList.add("offerBtn--close");

      setTimeout(() => {
        window.scrollTo({
          top: formAdd.offsetTop - navBar.clientHeight,
          behavior: "smooth",
        });
      }, 2000);
    }

    let numberShow = data[ind].clickNum;
    if (numberShow == 1) {
      if (ind == 0) {
        test(ind);
        data[ind].clickNum = 2;
      } else if (ind == 1) {
        test(ind);
        data[ind].clickNum = 2;
      } else if (ind == 2) {
        test(ind);
        data[ind].clickNum = 2;
      } else if (ind == 3) {
        test(ind);
        data[ind].clickNum = 2;
      }
    } else {
      window.scrollTo({
        top: formAdd.offsetTop - navBar.clientHeight,
        behavior: "smooth",
      });
    }


  });
});
