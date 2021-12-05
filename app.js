const primaryNav = document.querySelector(".primary-navigation");
const toggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector("nav");
const navLinks = document.querySelectorAll(".primary-navigation .nav-link");
const body = document.querySelector("body");

toggle.addEventListener("click", () => {
	const visible = primaryNav.getAttribute("data-visible");

	if (visible === "false") {
		primaryNav.setAttribute("data-visible", true);
		toggle.setAttribute("aria-expanded", true);
	} else {
		primaryNav.setAttribute("data-visible", false);
		toggle.setAttribute("aria-expanded", false);
	}
});

navLinks.forEach(navLink => {
	navLink.addEventListener("click", () => {
		navLinks.forEach(nav => {
			nav.classList.remove("active");
		});
		navLink.classList.add("active");
	});
});

window.onscroll = () => {
	let specs = window.scrollY;
	console.log(specs);
	if (window.scrollY > 1080) {
		navbar.classList.add("head-active");
	} else {
		navbar.classList.remove("head-active");
	}
};
