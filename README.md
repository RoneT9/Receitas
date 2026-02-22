Buscador de Receitas

🍔 Buscador de Receitas

Aplicação web que permite buscar receitas a partir de um ingrediente informado pelo usuário, consumindo dados de uma API externa.

🔎 O usuário digita um ingrediente e o sistema retorna receitas relacionadas, exibindo imagem, nome e detalhes.

🚀 Demonstração

🛠️ Tecnologias utilizadas

HTML5

CSS3

JavaScript (ES6+)

Consumo de API REST

Fetch API

Manipulação de DOM

📡 API utilizada

TheMealDB API

Endpoint utilizado:

https://www.themealdb.com/api/json/v1/1/filter.php?i=

🎯 Funcionalidades

✅ Busca de receitas por ingrediente

✅ Renderização dinâmica na tela

✅ Exibição de imagem da receita

✅ Exibição de ingredientes e medidas

✅ Tratamento de erro quando nenhuma receita é encontrada

🧠 Aprendizados aplicados

Uso de fetch() para requisições assíncronas

Template literals

Acesso dinâmico a propriedades (recipe[\strIngredient${i}`]`)

Estrutura de repetição com for

Manipulação de innerHTML

Boas práticas para evitar erro com null na API

📂 Estrutura do Projeto
📁 buscador-de-receitas
 ├── receita.html
 ├── receita.css
 └── receita.js
