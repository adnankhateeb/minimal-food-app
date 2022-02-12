import { getData, appendData } from "./scripts/showData.js";
import navbar from "./components/navbar.js"

let recipe = document.getElementById('recipeSearch');

let parent = document.getElementById('container');

let navbarDiv = document.getElementById('navbar-container')

let main = async () => {
    
    let name = recipe.value;
    // console.log(name)
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    let res = await getData(url);
    appendData(res,parent);
    // console.log(res);

};


let timerID;
recipe.addEventListener("input", () =>{

    if (timerID) {
        clearTimeout(timerID);
    }

    timerID = setTimeout(() => {
        main();
    }, 800)


});

navbarDiv.innerHTML = navbar();


    




    

