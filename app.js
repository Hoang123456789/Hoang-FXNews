// Get data API top 10 headlines
fetch('https://gnews.io/api/v4/top-headlines?lang=en&token=636563d98e9d26a4f55d45dec06a678c')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    
    // Loop data API to import HTML
    for ( var i = 0; i <= data.articles.length; i++) {
        document.getElementById('top-news').innerHTML +=
        `<li class="row">
            <div class="col-12 col-sm-12 col-lg-6 hvr-grow">
                <a href="${data.articles[i].url}" target="_blank">
                    <img src="${data.articles[i].image}" alt="">
                </a>
            </div>
            <div class="col-12 col-sm-12 col-lg-6">
                <h3><a href="${data.articles[i].url}" target="_blank">${data.articles[i].title}</a></h3>
                <h5>${data.articles[i].description}</h5>
                <p>${data.articles[i].content}</p>
                <p>${data.articles[i].publishedAt}</p>
            </div>
        </li>`
    }
});

// Get data API searchs
function searchEngine () {
    var keyWords = document.getElementById("keywords").value;
    fetch('https://gnews.io/api/v4/search?q=' + keyWords + '&lang=en&token=636563d98e9d26a4f55d45dec06a678c')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data);
            document.getElementById('top-news').innerHTML = "";

            // Loop data API to import HTML
            for ( var i = 0; i <= data.articles.length; i++) {
                document.getElementById('top-news').innerHTML +=
                `<li class="row">
                    <div class="col-12 col-sm-12 col-lg-6 hvr-grow">
                        <a href="${data.articles[i].url}" target="_blank">
                            <img src="${data.articles[i].image}" alt="">
                        </a>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-6">
                        <h3><a href="${data.articles[i].url}" target="_blank">${data.articles[i].title}</a></h3>
                        <h5>${data.articles[i].description}</h5>
                        <p>${data.articles[i].content}</p>
                        <p>${data.articles[i].publishedAt}</p>
                    </div>
                </li>`
            }
        });
};