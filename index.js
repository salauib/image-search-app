const accessKey = "2uDvpyTQEYGQ6GQBzw7hqe-aRX0pdoNGfEYgNfEDdEk";

const formElement = document.querySelector("form");
const searchInputElement = document.getElementById("search-input");
const searchResultsElement = document.querySelector(".search-results");
const showMoreButton = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

function searchImages(){
    inputData = searchInputElement.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&
    query=${inputData}&client_id=${accessKey}`;

    console.log(url);
};

formElement.addEventListener("submit", (event)=>{
    event.preventDefault();
    searchImages();
});