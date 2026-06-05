import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

function ComicDetailPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleAddFavorite() {
    if (!user) {
      navigate("/login");

      return;
    }

    // favoriet toevoegen via API
  }

  return (
    <div>
      <h1>Comic detail</h1>

      <button onClick={handleAddFavorite}>Voeg toe aan favorieten</button>
    </div>
  );
}

export default ComicDetailPage;
