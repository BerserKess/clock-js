function clockConstructor() {
	const clockDisplay = document.querySelector("#timer");
	const clockDate = document.querySelector("#date");
	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	];

	// PEGAR DATA ATUAL
	const liveTime = new Date();

	// CRIAR E FORMATAR HORAS
	let hours = String(liveTime.getHours()).padStart(2, 0);
	let minutes = String(liveTime.getMinutes()).padStart(2, 0);
	let seconds = String(liveTime.getSeconds()).padStart(2, 0);
	let time = `${hours} : ${minutes} : ${seconds}`;

	// CRIAR E FORMATAR DIAS
	let day = String(liveTime.getDay()).padStart(2, 0);
	let month = monthNames[liveTime.getMonth()];
	let year = liveTime.getFullYear();
	let date = `${month} ${day} ${year}`;

	// MOSTRAR NA TELA
	clockDisplay.innerHTML = time;
	clockDate.innerHTML = date;
}

clockConstructor();
setInterval(clockConstructor, 1000);
