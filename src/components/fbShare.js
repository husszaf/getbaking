import { FaFacebook, FaTwitter } from 'react-icons/fa';
import Data from "../recipes.json"; // Import the recipes data from the JSON file

const FacebookShareLink = () => {
  const recipe = Data.find((recipe) => recipe.uuid);
    const url = 'https://husszaf.github.io/pages/RecipeDetails/'; // Replace with the URL of the page you want to share
    const shareLink = `https://www.facebook.com/sharer/sharer.php?u=${url + recipe.uuid}`;
    return (
      <a href={shareLink}>
        <FaFacebook style={{ fontSize: '1.5rem'}}/>
      </a>
    );
  };

export default FacebookShareLink;