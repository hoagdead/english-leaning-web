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
