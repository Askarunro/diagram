const refs = {
  balanceList: document.querySelector(".balance__list"),
  balanceItems: document.querySelectorAll(".balance__item"),
  garnomyImgWrapper: document.querySelector(".garnomy__img--wrapper"),
  garnomyInfoWrapper: document.querySelector(".garmony__info--wrapper"),
  balanceCaptions: document.querySelectorAll(".balance__caption"),
};
// refs.balanceList.addEventListener("click", (e) => {
//   // клік закриття
//   if (e.target.classList.contains("balance__caption") && e.target.classList.contains("active")) {
//     e.target.classList.toggle("active");
//     e.target.nextElementSibling.classList.toggle("visible");
//     e.target.nextElementSibling.style.maxHeight = 0;
//     return;
//   }
//   // клік відкриття
//   if (e.target.classList.contains("balance__caption") && !e.target.classList.contains("active")) {
//     e.target.classList.toggle("active");
//     e.target.nextElementSibling.classList.toggle("visible");
//     e.target.nextElementSibling.style.maxHeight = e.target.nextElementSibling.scrollHeight + "px";
//     return;
//   }
// });

refs.balanceCaptions.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      item.nextElementSibling.classList.remove("visible");
      item.nextElementSibling.style.maxHeight = 0;
      return;
    }
    if (!item.classList.contains("active")) {
      refs.balanceItems.forEach((elem) => {
        if (elem.querySelector(".balance__caption.active")) {
          elem.querySelector(".balance__caption.active").classList.remove("active");
          elem.querySelector(".balance__item--inner.visible").style.maxHeight = 0;
          elem.querySelector(".balance__item--inner.visible").classList.remove("visible");

          return;
        }
      });
      item.classList.toggle("active");
      item.nextElementSibling.classList.toggle("visible");
      item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + "px";
    }
  });
});

// const garmonyVisible = () => {
//   console.log(refs.garnomyImgWrapper.offsetHeight);
//   refs.garnomyInfoWrapper.style.height = refs.garnomyImgWrapper.offsetHeight + "px";
// };
// garmonyVisible();
