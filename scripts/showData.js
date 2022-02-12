
let getData = async (url) => {

    try {


        let res = await fetch(url);

        let data = await res.json();

        return data;

    } catch (err) {

        console.log(err)

    }

}

let appendData = (data, parent) => {

    parent.innerHTML = "";

    data.meals.map((el) => {

        let card = document.createElement('div')
        card.id = "card";

        let name = document.createElement('p')
        name.innerText = el.strMeal;

        let image = document.createElement('img');
        image.src = el.strMealThumb;

        let category = document.createElement('p')
        category.innerText = `Category: ${el.strCategory}`;

        let area = document.createElement('p')
        area.innerText = `Delicacy: ${el.strArea}`;

        card.append(image, name, category, area);

        parent.append(card);

    })



}


let appendRandom = (data,parent) => {


    console.log(data);
    let bigCard = document.createElement('div')

    bigCard.id = "bigCard"

    let img = document.createElement('img')
    img.src = data.strMealThumb;

    let name = document.createElement("h4")
    name.innerText = data.strMeal;

    let area = document.createElement('p')
    area.innerText = `Area: ${data.strArea}`;

    let inst = document.createElement("p")
    inst.innerText = `Instructions: ${data.strInstructions}`;

    let cat = document.createElement('p')
    cat.innerText = `Category: ${data.strCategory}`;

    let ing = document.createElement('p')
    ing.innerText = `Ingredients: ${data.strIngredient1}, ${data.strIngredient2}, ${data.strIngredient3}, ${data.strIngredient4} and ${data.strIngredient5}`

    bigCard.append(img,name,area,cat, ing, inst)

    parent.append(bigCard)

}
export { getData, appendData, appendRandom };