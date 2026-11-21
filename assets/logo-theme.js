const isPrideMonth = new Date().getMonth() === 5;

document.querySelectorAll("[data-logo-theme]").forEach((logo) => {
	const theme = logo.dataset.logoTheme;
	const variant = isPrideMonth ? "pride" : "standard";
	const source = logo.dataset[`logo${theme[0].toUpperCase()}${theme.slice(1)}${variant === "pride" ? "Pride" : ""}`];

	if (!source) {
		throw new Error(`Missing ${theme} ${variant} logo source.`);
	}

	logo.src = source;
});
