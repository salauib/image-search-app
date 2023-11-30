const accessKey = "2uDvpyTQEYGQ6GQBzw7hqe-aRX0pdoNGfEYgNfEDdEk";

const formElement = document.querySelector("form");
const searchInputElement = document.getElementById("search-input");
const searchResultsElement = document.querySelector(".search-results");
const showMoreButton = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages(){
    inputData = searchInputElement.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
        if(page === 1){
            searchResultsElement.innerHTML = ""; 
        }

        const results = data.results;

        results.map((results)=>{
            const imageWrapper = document.createElement("div");
            imageWrapper.classList.add("search-result");
            const image = document.createElement("img")
            image.src = results.urls.small;
            image.alt = results.alt_description;
            const imageLink = document.createElement("a");
            imageLink.href = results.links.html;
            imageLink.target = "_blank";
            console.log(results);
        })

        

        if(page > 1){
            showMoreButton.style.display = block;
        }
};

formElement.addEventListener("submit", (event)=>{
    event.preventDefault();
    page = 1;
    searchImages();
});