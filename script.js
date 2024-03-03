function searchDictionary() {
    var searchInput = document.getElementById("searchInput").value;
    var apiKey = "ba65c874-fea8-4367-a04c-7b9d1c31310a"; // Replace this with your Merriam-Webster API key
    var url = "https://www.dictionaryapi.com/api/v3/references/sd4/json/" + searchInput + "?key=" + apiKey;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        displayResults(data);
    })
    .catch(error => console.error('Error:', error));
}

function displayResults(data) {
    var searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = ""; // Clear previous results

    if (data.length > 0) {
        var wordDefinition = "<h2>" + data[0].meta.id + "</h2>";
        if (data[0].shortdef && data[0].shortdef.length > 0) {
            wordDefinition += "<p><strong>Definition:</strong> " + data[0].shortdef[0] + "</p>";
        }
        searchResults.innerHTML = wordDefinition;
    } else {
        searchResults.innerHTML = "<p>No results found</p>";
    }
}
// sign up
const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

// Add 'show' class to home element when the page loads
document.addEventListener("DOMContentLoaded", function() {
  home.classList.add("show");
});



pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
