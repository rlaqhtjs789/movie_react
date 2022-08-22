import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
    const [loading, setloading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.jsonminimum_rating=8.8&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setloading(false);
    }
    useEffect(() => {
        getMovies();
    }, []); 
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1> 
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movie
                            //key는 react.js에서만 map안에서 컴포넌트들을 render할때 사용
                            key={movie.id} 
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title} 
                            summary={movie.summary}
                            genres={movie.genres} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;