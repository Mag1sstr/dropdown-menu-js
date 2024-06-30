// const btn = document.querySelector(".drop .drop-item");
// const items = document.querySelector(".items");

const btn = document.querySelectorAll(".drop");
// const items = document.querySelectorAll(".items");

const secBtn = document.querySelectorAll(".parent");
// const secItems = document.querySelector(".parent .items .sec-open");

// btn.addEventListener("click", function () {
//   if (items.classList.contains("open")) {
//     items.classList.remove("open");
//     secBtn.forEach((i) => {
//       i.classList.remove("sec-open");
//     });
//   } else {
//     items.classList.add("open");
//   }
// });
document.addEventListener('click',function(){
  btn.forEach(i=>{
    i.classList.remove('open')
  })
})
btn.forEach((el) => {
  el.addEventListener("click", function (event) {
      event.stopPropagation()
      if (el.classList.contains("open")) {
        el.classList.remove("open");
      } else {
        let del = document.querySelector('.drop.open')
        if(del) del.classList.remove('open')
        secBtn.forEach((i) => {
          i.classList.remove("sec-open");
        });
        el.classList.add("open");
      }
  });
});

secBtn.forEach((i) => {
  i.addEventListener("click", function (event) {
    event.stopPropagation()
    if (i.classList.contains("sec-open")) {
      i.classList.remove("sec-open");
    } else {
      let el = document.querySelector(".parent.sec-open");
      if (el) el.classList.remove("sec-open");
      i.classList.add("sec-open");
    }
  });
});
