const refs = {
  balanceList: document.querySelector(".balance__list"),
  balanceItems: document.querySelectorAll(".balance__item"),
  garnomyImgWrapper: document.querySelector(".garnomy__img--wrapper"),
  garnomyInfoWrapper: document.querySelector(".garmony__info--wrapper"),
  balanceCaptions: document.querySelectorAll(".balance__caption"),
  garmonyLink: document.querySelector(".garmony__link"),
  balanceLink: document.querySelector(".balance__link"),
};

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

const garmonyVisible = () => {
  const heightInfo = refs.garnomyInfoWrapper.offsetHeight;
  refs.garnomyInfoWrapper.style.maxHeight = refs.garnomyImgWrapper.offsetHeight + "px";
  refs.garnomyInfoWrapper.style.overflow = "hidden";
  refs.garmonyLink.addEventListener("click", (e) => {
    if (e.currentTarget) {
      if (refs.garnomyInfoWrapper.classList.contains("more")) {
        refs.garnomyInfoWrapper.style.maxHeight = refs.garnomyImgWrapper.offsetHeight + "px";
        refs.garnomyInfoWrapper.classList.toggle("more");
        return;
      }
      refs.garnomyInfoWrapper.style.maxHeight = heightInfo + "px";
      refs.garnomyInfoWrapper.classList.toggle("more");
      return;
    }
  });
};
garmonyVisible();

// refs.balanceLink.addEventListener("click", (e) => {
//   // var a = document.createElement("a");
//   // a.href = polarChart.toBase64Image();
//   // a.download = "my_Wheel.png";
//   // a.click();
//   // const divContents = document.querySelector(".balance__box--inner").innerHTML;
//   // console.log(divContents);
//   // const a = window.open("", "", "height=500, width=500");
//   // a.document.write("<html>");
//   // a.document.write("<body> <h1>Div contents are <br>");
//   // a.document.write(divContents);
//   // a.document.write("</body></html>");
//   // a.document.close();
//   // a.print();
// });
