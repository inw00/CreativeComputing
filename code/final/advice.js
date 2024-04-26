function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())  // Convert the response to JSON
        .then(data => {
            adviceText = data.slip.advice;
            fitText(adviceText, width, height); // Make sure to pass height as well
            console.log(adviceText);  // Log advice
        })
    .catch(error => console.error('Error fetching data:', error));
}

