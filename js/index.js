const refs = {
  balanceList: document.querySelector(".balance__list"),
  garnomyImgWrapper: document.querySelector(".garnomy__img--wrapper"),
  garnomyInfoWrapper: document.querySelector(".garmony__info--wrapper"),
};
refs.balanceList.addEventListener("click", (e) => {
  if (e.target.classList.contains("balance__caption") && e.target.classList.contains("active")) {
    e.target.classList.toggle("active");
    e.target.nextElementSibling.classList.toggle("visible");
    e.target.nextElementSibling.style.maxHeight = 0;
    return;
  }

  if (e.target.classList.contains("balance__caption") && !e.target.classList.contains("active")) {
    e.target.classList.toggle("active");
    e.target.nextElementSibling.classList.toggle("visible");
    e.target.nextElementSibling.style.maxHeight = e.target.nextElementSibling.scrollHeight + "px";
    return;
  }
});

// const garmonyVisible = () => {
//   console.log(refs.garnomyImgWrapper.offsetHeight);
//   refs.garnomyInfoWrapper.style.height = refs.garnomyImgWrapper.offsetHeight + "px";
// };
// garmonyVisible();
