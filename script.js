function fetchSimpsonQuoteJSON() {
  const simpsonId = 1;
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios
    .get(url)
    .then(function (response) {
      return response.data[0];
    })
    .then(function (simpsonQuote) {
      console.log("data decoded from JSON:", simpsonQuote);
      const simpsonQuoteHtml = `
                <p><strong>${simpsonQuote.character}</strong></p>
                <p>${simpsonQuote.quote}</p>
                <img src="${simpsonQuote.image}" />
              `;
      document.querySelector("#simpsonId").innerHTML = simpsonQuoteHtml;
    });
}
fetchSimpsonQuoteJSON();

const simpsonId = document.getElementById("simpsonId");

simpsonId.addEventListener("click", function () {
  document.getElementById("simpsonId").innerHTML = fetchSimpsonQuoteJSON();
});

simpsonId.onmouseover = function () {
  document.body.style.cursor = "pointer";
};
