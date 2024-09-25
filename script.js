const countries = [
    // Your list of countries and capitals
];

const countryElement = document.getElementById("country");
const options = document.querySelectorAll("input[name='answer']");
const submitButton = document.querySelector("button");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return   
 array;
}

function generateQuestion() {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const currentCountry = countries[randomIndex];
    countryElement.textContent = currentCountry.country;

    // Create an array of all capitals
    const allCapitals = countries.map(country => country.capital);

    // Remove the correct answer from the array
    allCapitals.splice(allCapitals.indexOf(currentCountry.capital), 1);

    // Randomly select three capitals from the remaining array
    const randomCapitals = shuffleArray(allCapitals).slice(0, 3);

    // Add the correct answer to a random position in the array
    randomCapitals.splice(Math.floor(Math.random() * 4), 0, currentCountry.capital);

    options.forEach((option, index) => {
        option.value = randomCapitals[index];
        option.nextElementSibling.textContent = randomCapitals[index];
    });
}

submitButton.addEventListener("click", () => {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (selectedOption) {
        if (selectedOption.value   
 === "incorrect") {
            alert("Incorrect!");
        } else {
            alert("Correct!");
        }
        generateQuestion();
    }
});

generateQuestion();
