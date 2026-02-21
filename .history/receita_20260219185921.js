//ALGORITMOS

//Saber quando o usuario clicou na receita
//Busca informaçães da receita individual na API
//Colocar a receita individualna tela

//Pegar a informação do input , quando o botão for clicado
const input = document.querySelector(".seach-ipunt");
const form = document.querySelector(".search-form");
const recipelist = document.querySelector(".recipe-list");
const recipeDetails = document.querySelector(".recipe-details");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target[0].value;
  seachRecipes(inputValue);
});

//Ir ate a API , trazer as receitas
async function seachRecipes(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  showRecipe(data.meals);
}

//Colocar as receitas na tela
function showRecipe(recipes) {
  recipelist.innerHTML = recipes
    .map(
      (item) =>
        ` 
    <div class ="recipe-card"onclick ="getRecipeDatails(${item.idMeal})">
    <img src = "${item.strMealThumb}" alt = "recipe-photo">
    <h3>${item.strMeal}</h3>
    </div>
    <br/>
    `,
    )
    .join("");
}
//saber quando o usuario clicou na receita
async function getRecipeDatails(id) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();
  const recipe = data.meals[0];

  let ingredients = "";

  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients += `<li>${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}</li>`;
    } else {
      break;
    }
  }

  recipeDetails.innerHTML = `
  <h2>${recipe.strMeal}</h2>
  <img src"${recipe.strMealThumb}" alt=${recipe.strMeal}class="recipe-img">
  <h3>Categoria: ${recipe.strCategory}</h3>
  <h3>Origem: ${recipe.strArea}</h3>
  <h3>ingredientes</h3>
  <ul>${ingredients} </ul>
  <h3>instruçães</h3>
  <p>${recipe.strInstructions}</p>`;
  console.log(recipeDetails);
}
