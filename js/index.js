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

// const input = document.querySelectorAll("input[type=range]");
// console.log(input);
// input.forEach((item) => {
//   item.addEventListener("change", (e) => {
//     console.log("hi");
//   });
// });
// refs.balanceList.addEventListener("input", (e) => {
//   console.log(e);
// });

// const test = document.querySelectorAll(".rangeslider__value-bubble");
// test.forEach((target) => {
//   // Конфигурация observer (за какими изменениями наблюдать)
//   const config = {
//     characterData: true,
//   };

//   // Колбэк-функция при срабатывании мутации
//   const callback = function (mutationsList) {
//     for (let mutation of mutationsList) {
//       console.log(mutation);
//       if (mutation.type === "characterData") {
//         console.log("A child node has been added or removed.");
//       }
//     }
//   };

//   // Создаём экземпляр наблюдателя с указанной функцией колбэка
//   const observer = new MutationObserver(callback);

//   // Начинаем наблюдение за настроенными изменениями целевого элемента
//   observer.observe(target, config);
//   // Позже можно остановить наблюдение
//   // observer.disconnect();
// });
