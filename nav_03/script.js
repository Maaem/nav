let hamburger = document.getElementById('hamburger');
let navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    const visibility = navUl.getAttribute("data-visible");

    if (visibility === "false") {
        navUl.setAttribute("data-visible", true);
        hamburger.setAttribute("aria-expanded", true);
    } else  {
        navUl.setAttribute("data-visible", false);
        hamburger.setAttribute("aria-expanded", false);

    }

}); 