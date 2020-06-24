import React, { useEffect, useState } from 'react';
import Recipe from './component/Recipe/Recipe.jsx';
import './App.css';
import './component/Forms/forms.css';
 



const App = () => {


  const APP_ID = "99d7a09c";
  //this is the api Id
  const APP_KEY = "4a1c15abc9b936f54e16133f6777bfab";
  //this is the key.
  const [recipes, setRecipes] = useState([]);
  //create my state 
   const [search, setSearch ] = useState('');
  //this const to show data only when we click on search
  const [query, setQuery ] = useState('chicken');



  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () =>{
    //q is = to query which is equal to cheken the things we are searchin for 
  const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  //await aloow us to make sur whe this data will come back 
    const data = await response.json();
   setRecipes(data.hits);
   console.log(data.hits);
  }
  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  }
   
  

  const updateSearch = (event) =>{
      setSearch(event.target.value);

      
    
    }
  

  return(
    

  
    <div className="formulaire">


      <form className="form-app" onSubmit={getSearch} >
      <h2 className="header">search for you recipe here</h2>
        <div className="displa-flex">
                <input type="text" className="search-input" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit"><i className="fa fa-search"></i></button>
          </div>
                
        </form>
        <div className="receip-content">

       {recipes.map(recipe => (
         <Recipe
         key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          />

       ))};
        </div>
    
       
    </div>
  )
}

export default App;
