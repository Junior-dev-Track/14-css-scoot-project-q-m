/*
 * EFFECT NAV-BAR SCROLL
 */
let lastScrollTop = null;

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const dimensionNavBar = 96.6;
  const screenWidth = 1000;

  let positionScrollY = window.scrollY;
  let responsive = matchMedia(`(max-width: ${screenWidth}px)`).matches;

  if (responsive) {
    header.style.top = "0";
  } else {
    if (positionScrollY >= dimensionNavBar) {
      header.style.top = "-100px";
    }
    if (lastScrollTop !== null && lastScrollTop > positionScrollY) {
      header.style.top = "0";
    }
    lastScrollTop = positionScrollY <= 0 ? 0 : positionScrollY;
  }
});

/*
 * EFFECT CONTAINER FAQS
 */
