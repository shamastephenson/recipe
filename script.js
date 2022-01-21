
//Variables for Including and Excluding Ingredients
// Assigning Variables
const searchBar = document.querySelector(".search-bar");
const incluSearchBar = document.querySelector(".inclu-search-bar");
const incluSearchBtn = document.querySelector(".inclu-searchBtn");
const searchBtn = document.querySelector(".search-btn");
const recipeCtn = document.querySelector(".recipe-row");
const inclCont = document.querySelector(".inclusion");
const exclCont = document.querySelector(".exclusion");


function createDiv(){
  const inputValue = incluSearchBar.value;
  inclCont.innerHTML += `<div class="temp-btn mr-2">${inputValue}<a class="close">x</a></div>`;

}

incluSearchBtn.addEventListener("click", createDiv);

searchBtn.addEventListener("click", Search);

// Execute a function when the user releases a key on the keyboard
searchBar.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    Search();
  }
});





// Recipe Search Function 

function Search() {
  searchValue = searchBar.value;
  let API_KEY = "a0214d08df06781b024e0732b626c15a";
  let API_ID = "fc7c5759";

  fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=fc7c5759&app_key=a0214d08df06781b024e0732b626c15a&imageSize=LARGE&to=14
    `)
    .then((response) => response.json())
    .then((data) => {
      let emptyContent = "";

      console.log(data);
      let list = "";

      data.hits.forEach((rec) => {
        let stringIngredients = [];
        emptyContent += `
  


    <div class="col-lg-3 col-md-6 col-sm-8 box-shadow g">
  
    <div class="card">
    <img
    class="img-fluid"
    src="${rec.recipe.images.LARGE.url}"
    alt=""
  />
   
   <div class="row justify-content-center align-items-center">
   <div class="col-10 d-flex flex-column">
   
   <h5 class="mt-2 recipe-label py-3">${rec.recipe.label}</h5>
   <p class="mt-1 text-capitalize">${rec.recipe.source}</p>
   <div class="d-flex justify-content-start">
   <p class="cal-num pr"><i class='bx bxs-hot'></i> ${Math.round(
     rec.recipe.calories
   )}</p>
   <p class="time-num pr"><i class='bx bx-timer'></i> ${
     rec.recipe.totalTime
   }</p>
   <p class="portion-size pr"><i class='bx bx-user'></i> ${rec.recipe.yield}</p>
   
   </div>
   
   <a class="btn btn-dark my-3 search-btn" target="_blank" href="${
     rec.recipe.url
   }">View Recipe</a> 
   
   </div>
    </div>


    </div>

  </div>

    
  `;
      });

      recipeCtn.innerHTML = emptyContent;
    });

    // Recipe Search Function ends 
}



