import { FaFacebook, FaTwitter } from 'react-icons/fa';
import Data from "../recipes.json"; // Imports the recipes data from the JSON file

const FacebookShareLink = () => {
  const recipe = Data.find((recipe) => recipe.uuid);
    const url = 'https://husszaf.github.io/pages/RecipeDetails/'; // Replaces with the URL of the recipe page
    const shareLink = `https://www.facebook.com/sharer/sharer.php?u=${url + recipe.uuid}`; // Replaces with the tweet text
    return (
      <a href={shareLink}>
        <FaFacebook style={{ fontSize: '1.5rem'}}/>
      </a>
    );
  };

export default FacebookShareLink;