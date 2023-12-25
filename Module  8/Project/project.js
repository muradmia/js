const c = (global)=>{
    const searchtext = document.getElementById("search-box").value;
    console.log(searchtext);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchtext ? searchtext : global}`)
    .then((res) => res.json())
    .then((data) => display_data(data.meals));
};


const display_data = (data)=>{
    document.getElementById("total-meals").innerText = data.length;
    const mealscontainer = document.getElementById("meals-container");

    data.forEach((meal)=>{
        console.log(meal);
        const card = document.createElement("div");
        card.classList.add("box");
        card.innerHTML=`
        <img class = "box-img" src=${meal.strMealThumb} alt="">
        <h2>${meal?.strMeal}</h2>
        <p>${meal.strInstructions.slice(0,20)}</p>
        <button onclick ="displayModel('${meal.idMeal}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    details
  </button>
        `
        mealscontainer.appendChild(card);
    });
};
const displayModel = async(info)=>{
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${info}`);
        const data = await response.json();
        console.log(data.meals[0]);
        
    }
    catch{

    }
};


c("a");