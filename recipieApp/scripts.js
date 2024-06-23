
document.addEventListener("DOMContentLoaded", (event) => {
    const button = document.getElementById("search-button");
    const searchBox = document.getElementById("search-box");
    const recipeContainer = document.getElementById("recipe-container");
    

    const fetchRecipes = async (query) => {
        try {
            const data = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const response = await data.json();
        console.log(response);
  
        // Clear previous search results
        recipeContainer.innerHTML = "";
  
        if (response.meals) {
          response.meals.forEach((meal) => {
            console.log(meal);
  
            // Create and append the meal container
            const mealContainer = document.createElement("div");
            mealContainer.classList.add("meal-container");
  
            // Create and append the meal name
            const mealName = document.createElement("h3");
            mealName.textContent = meal.strMeal;
            mealContainer.appendChild(mealName);
  
            // Create and append the meal image
            const mealImage = document.createElement("img");
            mealImage.src = meal.strMealThumb;
            mealImage.alt = meal.strMeal; // Optional: Add alt text for accessibility
            mealContainer.appendChild(mealImage);
  
            // Create and append the meal instructions (initially hidden)
            const mealInstructions = document.createElement("p");
            mealInstructions.classList.add("meal-instructions");
            mealInstructions.textContent = meal.strInstructions;
            mealContainer.appendChild(mealInstructions);
            
            const mealCategory = document.createElement("p");
            mealCategory.textContent = `Category: ${meal.strCategory}`;
            mealContainer.appendChild(mealCategory);
            recipeContainer.appendChild(mealContainer);
  
            // Toggle meal instructions visibility on image click
            mealImage.addEventListener("click", () => {
              mealInstructions.classList.toggle("show");
            });
          });
        } else {
          // Handle case when no meals are found
          const noMealsMessage = document.createElement("p");
          noMealsMessage.textContent = "No meals found for this query.";
          recipeContainer.appendChild(noMealsMessage);
          console.log("no meals found for this query")
        }
      } catch (error) {
        console.error("An error occurred api:", error);
      }
    };
  
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const searchValue = searchBox.value.trim();
      if (searchValue) {
        fetchRecipes(searchValue);
      }
    });
  });
  