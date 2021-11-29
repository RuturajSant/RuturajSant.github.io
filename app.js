const primaryNav = document.querySelector(".primary-navigation");
const toggle = document.querySelector(".menu-toggle");

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
