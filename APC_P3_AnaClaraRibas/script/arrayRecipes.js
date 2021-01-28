function listRecipes()
{
    // Initialize Array list
    var list = [];

    // Object Structure

    // ingredients
    var oliveOil = {
        name: "Olive Oil",
        quantity: "2 tbsp"
    };

    var beefMince = {
        name: "Lean beef mince",
        quantity: "750 g"
    }

    var prosciutto = {
        name: "Pack prosciutto",
        quantity: "90 g"
    }

    var tomatoSauce = {
        name: "Tomato sauce",
        quantity: "200 g"
    }

    var beefStock = {
        name: "Hot beef stock",
        quantity: "200 ml"
    }

    var nutmeg = {
        name: "Nutmeg",
        quantity: "2 g"
    }

    var freshLasagna = {
        name: "Pack of fresh lasagne sheets",
        quantity: "300 g"
    }

    var whiteSauce = {
        name: "White sauce",
        quantity: "300 g"
    }

    var mozzarella = {
        name: "Ball mozzarella, torn into thin strips",
        quantity: "150 g"
    }

    // Recipe
    var lasagna = {
        category: "Italian Cousine",
        name: "Classic Lasagna",
        ingredients: [oliveOil, beefMince, prosciutto, tomatoSauce, beefStock, nutmeg, freshLasagna, whiteSauce, mozzarella]
        difficulty: "hard",
        time: "70 minutes"
    };

    //add recipes
    list.push(lasagna);

    var output = "";

    // create output
    for (var i = 0; i < list.length; i++) {
        var element = list[i];
        output += "Recipe: " + element.name + "."
        output += "Cousine: " + element.category + "."
        output += "Dificulty: " + element.difficulty + "."

        var ingredients = "ingredients { ";

        for (var j = 0; j < element.ingredients.length; j++) {
            var ingredient = element.ingredients[j];
            ingredients += "Ingredient Name: " + ingredient.name;
            ingredients += "Quantity: " + ingredient.quantity;
            ingredients += ", "
        }

        ingredients += "}";

        output += ingredients;

    }

    document.getElementById("recipes").innerHTML = output;

}

window.onload = listRecipes;