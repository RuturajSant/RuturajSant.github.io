const primaryNav = document.querySelector(".primary-navigation");
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".primary-navigation .nav-link");
const sections = document.querySelectorAll("section");
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
	loader.classList.add("remove-loader");
});
// toggle menu
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

// for bar under navilink
navLinks.forEach(navLink => {
	navLink.addEventListener("click", () => {
		navLinks.forEach(nav => {
			nav.classList.remove("active");
		});
		navLink.classList.add("active");
	});
});

const options = {
	threshold: 0.5,
};

let observer = new IntersectionObserver(navCheck, options);
function navCheck(entries) {
	entries.forEach(entry => {
		const secName = entry.target.id;
		const activeLink = document.querySelector(`[data-page=${secName}]`);
		if (entry.isIntersecting) {
			navLinks.forEach(nav => {
				nav.classList.remove("active");
			});
			activeLink.classList.add("active");
		}
	});
}

sections.forEach(section => {
	observer.observe(section);
});
