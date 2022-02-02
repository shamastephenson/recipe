//Variables for Including and Excluding Ingredients
// Assigning Variables
const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
const recipeCtn = document.querySelector(".recipe-row");

function createDiv() {
  const inputValue = incluSearchBar.value;
  inclCont.innerHTML += `<div class="temp-btn mr-2">${inputValue}<a class="close">x</a></div>`;
}

// incluSearchBtn.addEventListener("click", createDiv);

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
        let res = rec.recipe.ingredientLines;
        let resString = res.toString();

        emptyContent += `
  


    <div class="col-lg-3 col-md-6 col-sm-12 box-shadow">
  <a  class="card-link"href="${rec.recipe.url}">
    <div class="card">
    <img
    class="img-fluid"
    src="${rec.recipe.images.LARGE.url}"
    alt=""
  />
   
   <div class="row justify-content-center align-items-center">
   <div class="col-10 d-flex flex-column">
   
   <h5 class="mt-2 recipe-label defaultSize py-3">${rec.recipe.label}</h5>
   <p class="mt-1 secondarySize text-uppercase">${rec.recipe.source}</p>

   <p class="mt-1 defaultSize text-capitalize txt-flow">${resString}</p>


   
   </div>
    </div>


    </div>
</a>
  </div>

    
  `;
      });

      recipeCtn.innerHTML = emptyContent;
    });

  // Recipe Search Function ends
}
