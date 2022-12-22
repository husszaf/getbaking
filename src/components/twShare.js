import { FaTwitter } from 'react-icons/fa';
import Data from "../recipes.json"; // Import the recipes data from the JSON file
const TwitterShareLink = () => {
    const recipe = Data.find((recipe) => recipe.uuid);
    const url = 'https://husszaf.github.io/pages/RecipeDetails/'; // Replace with the URL of the page you want to share
    const text = 'Learn about this recipe on Get Baking!'; // Replace with the text you want to include in the tweet
    const shareLink = `https://twitter.com/intent/tweet?text=${text}&url=${url + recipe.uuid}`;
  
    return (
      <a href={shareLink}>
        <FaTwitter style={{ fontSize: '1.5rem' }}/>
      </a>
    );
  };

export default TwitterShareLink;
  