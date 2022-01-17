




// Search Recipes 
// Assigning Variables 
const searchBar = document.querySelector(".search-bar");
const searchBtn =document.querySelector(".search-btn");
const recipeCtn = document.querySelector(".recipe-row");


searchBtn.addEventListener("click",()=>{

    searchValue = searchBar.value;
    let API_KEY ="a0214d08df06781b024e0732b626c15a";
    let API_ID = "fc7c5759";
  
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=fc7c5759&app_key=a0214d08df06781b024e0732b626c15a&imageSize=LARGE&to=14
    `)
    .then(response => response.json())
    .then(data => {
      let emptyContent="";
   
  console.log(data);
  let list ="";


  data.hits.forEach((rec)=>{
    let stringIngredients =[];
    emptyContent+=`
  


    <div class="col-lg-4 col-md-6 col-sm-12 box-shadow g">
  
    <div class="card">
    <img
    class="img-fluid"
    src="${rec.recipe.images.LARGE.url}"
    alt=""
  />
   
   <div class="row justify-content-center align-items-center">
   <div class="col-10 d-flex flex-column">
   
   <h5 class="mt-3 recipe-label py-3">${rec.recipe.label}</h5>
   <p class="mt-1 text-capitalize">${rec.recipe.source}</p>
   <div class="d-flex justify-content-start">
   <p class="cal-num pr"><i class='bx bxs-hot'></i> ${Math.round(rec.recipe.calories)}</p>
   <p class="time-num pr"><i class='bx bx-timer'></i> ${rec.recipe.totalTime}</p>
   <p class="portion-size pr"><i class='bx bx-user'></i> ${rec.recipe.yield}</p>
   
   </div>
   
   <a class="btn btn-dark my-3 search-btn" target="_blank" href="${rec.recipe.url}">View Recipes</a> 
   
   </div>
    </div>


    </div>

  </div>















    
  `
  })
  
  recipeCtn.innerHTML = emptyContent;
  
  
  
  })
  
  
  })