export const currencyFormatter = (amount: number) => {
	return new Intl.NumberFormat("de-DE", {
		style: "currency",
		currency: "EUR",
	}).format(amount);
};
