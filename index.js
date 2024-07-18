document.addEventListener("DOMContentLoaded", function () {
  const apiTextElement = document.getElementById("apiText");
  const buttonElement = document.querySelector("button");
  const adviseElement = document.getElementById("advice");

  // Funktion för att hämta råd från API
  function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Något gick fel med förfrågan");
        }
        return response.json();
      })
      .then((data) => {
        adviseElement.textContent = `ADVICE #${data.slip.id}`;
        apiTextElement.textContent = data.slip.advice;
      })
      .catch((error) => {
        console.error("Fel:", error);
      });
  }

  // Klick-händelse för knappen
  buttonElement.addEventListener("click", fetchAdvice);

  // Hämta ett råd när sidan laddas
  fetchAdvice();
});
