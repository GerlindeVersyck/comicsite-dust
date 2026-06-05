import { useAuth } from "../../context/useAuth";

function BlogDetailPage() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Blog detail</h1>

      <section>
        <h2>Comments</h2>
      </section>

      <section>
        {user ? (
          <form>
            <textarea placeholder="Schrijf je reactie" />

            <button type="submit">Plaats reactie</button>
          </form>
        ) : (
          <p>Log in om een reactie te plaatsen.</p>
        )}
      </section>
    </div>
  );
}

export default BlogDetailPage;
