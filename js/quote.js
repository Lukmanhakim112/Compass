fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var quote = data[Math.floor(Math.random() * data.length)];

        document.getElementById("quoteText").innerHTML = quote.text;
        document.getElementById("quoteAuthor").innerHTML = quote.author;
    }
);
