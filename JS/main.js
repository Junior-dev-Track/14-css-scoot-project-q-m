let lastScrollTop = 0;

document.addEventListener(
  "scroll",
  () => {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      // Scrolling down
      document.querySelector("header").style.top = "-150px";
    } else {
      // Scrolling up
      document.querySelector("header").style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  },
  false
);
