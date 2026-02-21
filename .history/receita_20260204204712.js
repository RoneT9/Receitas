//ALGORITMOS

//Colocar as receitas na tela
//Saber quando o usuario clicou na receita
//Busca informaçães da receita individual na API
//Colocar a receita individualna tela

//Pegar a informação do input , quando o botão for clicado
const input = document.querySelector(".seach-ipunt");
const form = document.querySelector(".search-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target[0].value;
  seachRecipes();
});

//Ir ate a API , trazer as receitas
async function seachRecipes() {
  const response = await fetch("www.themealdb.com/api/json/v1/1/filter.php?i=banana");
  console.log(response);
}
