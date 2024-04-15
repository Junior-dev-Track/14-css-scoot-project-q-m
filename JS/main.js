/*
 * EFFECT NAV-BAR SCROLL
 */
let lastScrollTop = null;

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const dimensionNavBar = 96.6;
  const screenWidth = 768;

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
const cardAnswers = document.querySelectorAll(".card-answers");

let lastTagAnswer = null;
let lastTagArrow = null;

cardAnswers.forEach((card) => {
  const tagAnswer = card.querySelector("p.answer");
  const tagArrow = card.querySelector("img.arrow");

  if (tagAnswer) {
    card.addEventListener("click", () => {
      if (lastTagAnswer && lastTagAnswer !== tagAnswer) {
        lastTagAnswer.style.display = "none";
        if (lastTagArrow) {
          lastTagArrow.classList.remove("rotated");
        }
      }

      tagAnswer.style.display =
        tagAnswer.style.display === "block" ? "none" : "block";

      tagArrow.classList.toggle("rotated");

      lastTagAnswer = tagAnswer;
      lastTagArrow = tagArrow;
    });
  }
});
