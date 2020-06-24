import React from 'react';
import "./recipe.css"

const Recipe = ({title, calories, image, ingredients}) =>{
    return(
        <div className="recip-container">

            <h1 className="recipe-title">{title}</h1>
            <img  src={image} alt="" className="recipe-image"/>
            <p className="recipe-calor">Calories: {calories}</p>
            <ol className="list">
                Ingredients: 
                {ingredients.map(ingredient => (
                    <li key={ingredient.text}>{ingredient.text}</li>
                ))}
            </ol>

        </div>
    )
}

export default Recipe;