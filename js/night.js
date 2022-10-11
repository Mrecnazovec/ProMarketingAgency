let btn = document.querySelectorAll(".btn_swap")
let menu_text = document.querySelectorAll(".menu__link")
let body = document.querySelector("body")
let text_one = document.querySelectorAll(".title-one-boxone")
let text_two = document.querySelectorAll(".text-boxone")
let header_boooton = document.querySelectorAll(".header_boooton")
let mainOne_mini_box = document.querySelectorAll(".mainOne_mini_box")
let mainOne_box_info_text_two = document.querySelectorAll(".mainOne_box_info_text_two")
let mainOne_mini_title = document.querySelectorAll(".mainOne_mini_title")
let maintw0_titletwo = document.querySelectorAll(".maintw0_titletwo")

let carousel_box = document.querySelectorAll(".carousel_box")
let button__navbar = document.querySelectorAll(".button__navbar")
let input_group_text = document.querySelectorAll(".input-group-text")
let input = document.querySelectorAll(".input")
let footer = document.querySelector("footer")
let white = document.querySelectorAll(".white")
let mainFive_title = document.querySelectorAll(".mainFive_title")

let navbar__img = document.querySelectorAll(".navbar__img")
let text_maintwo = document.querySelectorAll(".text_maintwo")
let mainFour_title = document.querySelectorAll(".mainFour_title")
let mainOne_box_info_text_one = document.querySelectorAll(".mainOne_box_info_text_one")

for (g of btn) {
    g.addEventListener("click", function(e) {
        for (e of menu_text) {
            e.classList.toggle("light")
        }
        for (q of text_one) {
            q.classList.toggle("light")
        }
        for (w of text_two) {
            w.classList.toggle("light")
        }
        for (r of header_boooton) {
            r.classList.toggle("light")
        }
        for (t of mainOne_mini_box) {
            t.classList.toggle("light")
        }
        for (y of mainOne_box_info_text_two) {
            y.classList.toggle("light")
        }
        for (u of mainOne_mini_title) {
            u.classList.toggle("light")
        }
        for (i of maintw0_titletwo) {
            i.classList.toggle("light")
        }
        for (o of carousel_box) {
            o.classList.toggle("light")
        }
        for (p of input_group_text) {
            p.classList.toggle("light")
        }
        for (a of input) {
            a.classList.toggle("light")
        }
        for (s of white) {
            s.classList.toggle("light")
        }
        for (d of mainFive_title) {
            d.classList.toggle("light")
        }
        for (f of button__navbar) {
            f.classList.toggle("btn_disable")
            f.classList.toggle("light")
        }
        for (g of navbar__img) {
            g.classList.toggle("btn_disable")
        }
        for (h of text_maintwo) {
            h.classList.toggle("light")
        }
        for (j of mainFour_title) {
            j.classList.toggle("light")
        }
        for (k of mainOne_box_info_text_one) {
            k.classList.toggle("light")
        }

        body.classList.toggle("light")
        footer.classList.toggle("light")
    })
}
