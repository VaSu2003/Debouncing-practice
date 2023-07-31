
	var button = document.getElementById("debounce");
	const debounce = (func, delay) => {
		let debounceTimer
		return function() {
				clearTimeout(debounceTimer)
					debounceTimer
				= setTimeout(() => func(), delay)
		}
	}
	button.addEventListener('click', debounce(function() {
			alert("Hello\nNo matter how many times you" +
				"click the debounce button, I get " +
				"executed once every 3 seconds!!")
							}, 3000));
