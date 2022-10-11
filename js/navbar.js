let navbar = document.querySelector("nav");
let header = document.querySelector("header");
let header__section = document.querySelector(".header__section");
let menu__link = document.querySelectorAll(".menu__link");
let directParentHasClass =
  header.parentElement?.parentElement?.classList.contains("light");

if (document.documentElement.clientWidth > 1270) {
  window.addEventListener("scroll", function (e) {
    console.log(`${scrollY}px`);

    if (scrollY > 30) {
      window.addEventListener("click", function (f) {
        if (header.parentElement?.parentElement?.classList.contains("light")) {
          header.classList.add("light");
          header.classList.remove("black");
        } else {
          header.classList.add("black");
          header.classList.remove("light");
        }
      });
      if (header.parentElement?.parentElement?.classList.contains("light")) {
        header.classList.add("light");
        header.classList.remove("black");
      } else {
        header.classList.add("black");
        header.classList.remove("light");
      }

      header.classList.add("fixed");
      header__section.classList.add("fixed");
    } else {
      header.classList.remove("black");
      header.classList.remove("light");
      header.classList.remove("fixed");
      header__section.classList.remove("fixed");
    }
    if (scrollY > 907) {
      menu__link[0].classList.remove("active");
      menu__link[1].classList.remove("active");
      menu__link[2].classList.add("active");
      menu__link[3].classList.remove("active");
    } else if (scrollY < 907) {
      menu__link[0].classList.add("active");
      menu__link[1].classList.remove("active");
      menu__link[2].classList.remove("active");
      menu__link[3].classList.remove("active");
    }
    if (scrollY >= 1600) {
      menu__link[0].classList.remove("active");
      menu__link[1].classList.add("active");
      menu__link[2].classList.remove("active");
      menu__link[3].classList.remove("active");
    }
    if (scrollY >= 2400) {
      menu__link[0].classList.remove("active");
      menu__link[1].classList.remove("active");
      menu__link[2].classList.remove("active");
      menu__link[3].classList.add("active");
    }
    if (scrollY >= 3000) {
      menu__link[0].classList.remove("active");
      menu__link[1].classList.remove("active");
      menu__link[2].classList.remove("active");
      menu__link[3].classList.remove("active");
    }
  });
} else {
  
  window.addEventListener("scroll", function (e) {
    console.log(`${scrollY}px`);

    if (scrollY > 30) {
      window.addEventListener("click", function (f) {
        if (header.parentElement?.parentElement?.classList.contains("light")) {
          header.classList.add("light");
          header.classList.remove("black");
        } else {
          header.classList.add("black");
          header.classList.remove("light");
        }
      });
      if (header.parentElement?.parentElement?.classList.contains("light")) {
        header.classList.add("light");
        header.classList.remove("black");
      } else {
        header.classList.add("black");
        header.classList.remove("light");
      }

      header.classList.add("fixed");
      header__section.classList.add("fixed");
    } else {
      header.classList.remove("black");
      header.classList.remove("light");
      header.classList.remove("fixed");
      header__section.classList.remove("fixed");
    }
    if (scrollY > 907) {
      menu__link[0].classList.remove("active");
      menu__link[1].classList.remove("active");
      menu__link[2].classList.add("active");
      menu__link[3].classList.remove("active");
    } else if (scrollY < 907) {
      menu__link[0].classList.add("active");
      menu__link[1].classList.remove("active");
      menu__link[2].classList.remove("active");
      menu__link[3].classList.remove("active");
    }
    if (scrollY >= 2300) {
      menu__link[0].classList.remove("active");
      menu__link[1].classList.add("active");
      menu__link[2].classList.remove("active");
      menu__link[3].classList.remove("active");
    }
    if (scrollY >= 3400) {
      menu__link[0].classList.remove("active");
      menu__link[1].classList.remove("active");
      menu__link[2].classList.remove("active");
      menu__link[3].classList.add("active");
    }
    if (scrollY >= 4500) {
      menu__link[0].classList.remove("active");
      menu__link[1].classList.remove("active");
      menu__link[2].classList.remove("active");
      menu__link[3].classList.remove("active");
    }
  });
}

