const countries = [
    { country: "United States", capital: "Washington, D.C." },
    { country: "Canada", capital: "Ottawa" },
    { country: "Australia", capital: "Canberra" },
    // Add more countries here
];

const countryElement = document.getElementById("country");
const options = document.querySelectorAll("input[name='answer']");
const submitButton = document.querySelector("button");

function generateQuestion() {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const currentCountry = countries[randomIndex];
    countryElement.textContent = currentCountry.country;

    options.forEach((option, index) => {
        option.value = index === 0 ? currentCountry.capital : "incorrect";
        option.nextElementSibling.textContent = index === 0 ? currentCountry.capital : "Incorrect";
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
