let navbar =  () => {
    return `<div id="navbar">
        <div id="title" onclick = 'window.location.href="index.html"'>Minimal Food App</div>
        <div id="links">
            <p id="home" onclick = 'window.location.href="index.html"'>Search Recipe</p>
            <p id="recipeOfTheDay" onclick = 'window.location.href="randomR.html"'>Recipe of the Day</p>
            <p id="latest" onclick = 'window.location.href = "latestRecipes.html"'>Latest Recipes</p>
        </div>
    </div>`;
}

export default navbar;