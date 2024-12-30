async function fetchExchangeRates() {
	try {
		const responseUSD = await fetch('https://api.frankfurter.app/latest?from=USD');
		const responseEUR = await fetch('https://api.frankfurter.app/latest?from=EUR');
		const dataUSD = await responseUSD.json();
		const dataEUR = await responseEUR.json();
    const usdToTry = dataUSD.rates.TRY.toFixed(2);
		const eurToTry = dataEUR.rates.TRY.toFixed(2);
		document.getElementById('exchangeRates').innerText = `1 USD = ${usdToTry} TRY | 1 EUR = ${eurToTry} TRY`;
	} catch (error) {
		console.error('Error fetching exchange rates:', error);
		document.getElementById('exchangeRates').innerText = 'Error loading rates.';
	}
}
// Fetch rates on page load
fetchExchangeRates();
// Refresh rates every 1 hours
setInterval(fetchExchangeRates, 3600000);