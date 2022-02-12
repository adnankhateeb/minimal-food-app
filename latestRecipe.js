import navbar  from "./components/navbar.js"
import { getData, appendRandom } from "./scripts/showData.js";


let navbarDiv = document.getElementById('navbar-container')
navbarDiv.innerHTML = navbar();


let container = document.getElementById('container')

let randomRecipe = async () => {
    
    let url = 'https://www.themealdb.com/api/json/v1/1/random.php';

    let res = await getData(url);
    appendRandom(res.meals[0],container);


}

randomRecipe();