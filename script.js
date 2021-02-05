let theme = localStorage.getItem("theme");
(function () {
	emailjs.init("user_MnZ8VHFOnllDJbRJCVLPs");
})();
if (!theme) {
	setTheme("light");
} else {
	setTheme(theme);
}
let themeDots = document.getElementsByClassName("theme-dot");

for (i = 0; i < themeDots.length; i++) {
	themeDots[i].addEventListener("click", (e) => {
		let mode = e.target.dataset.theme;
		setTheme(mode);
	});
}

function setTheme(mode) {
	if (mode === "light") {
		document.getElementById("theme-selector").href = "";
	} else if (mode === "blue") {
		document.getElementById("theme-selector").href = "blue.css";
	} else {
		document.getElementById("theme-selector").href = "dark.css";
	}
	localStorage.setItem("theme", mode);
}
window.onload = function () {
	document
		.getElementById("contact-form")
		.addEventListener("submit", function (event) {
			event.preventDefault();
			// generate a five digit number for the contact_number variable
			// these IDs from the previous steps
			emailjs.sendForm("contact_service", "contact_form", this).then(
				function () {
					document.getElementById("mail-message").innerText =
						"Your Message Has Been Sent";
				},
				function (error) {
					document.getElementById("mail-message").innerText =
						"There Was An Error Sending Your Mail";
				},
			);
		});
};
