import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams();
  const movie = getMovieById(id);
  console.log(movie);

  return (
    <main>
      <div>
        <img src="" alt="" />
        <div>
          <h2>Title</h2>
          <span>User Score:</span>
          <h3>Overview</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            ex vero fugit, consequatur qui, soluta, omnis voluptates mollitia
            totam corrupti ducimus culpa architecto eaque labore? Soluta illum
            sint odio debitis.
          </p>
          <h3>Genres</h3>
          <span>Genre</span>
        </div>
      </div>
      <div>
        <span>Additional information</span>
        <ul>
          <li>
            <a href="*">Cast</a>
          </li>
          <li>
            <a href="*">Reviews</a>
          </li>
        </ul>
      </div>
    </main>
  );
};
