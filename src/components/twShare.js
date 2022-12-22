import { FaTwitter } from 'react-icons/fa';
import Data from "../recipes.json"; // Imports the recipes data from the JSON file
const TwitterShareLink = () => {
    const recipe = Data.find((recipe) => recipe.uuid);
    const url = 'https://husszaf.github.io/pages/RecipeDetails/'; // Replaces with the URL of the recipe page
    const text = 'Learn about this recipe on Get Baking!'; // Replaces with the tweet text
    const shareLink = `https://twitter.com/intent/tweet?text=${text}&url=${url + recipe.uuid}`;
  
    return (
      <a href={shareLink}>
        <FaTwitter style={{ fontSize: '1.5rem' }}/>
      </a>
    );
  };

export default TwitterShareLink;
  