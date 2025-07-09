import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home"
import Movies from "./Movies";
import { useState } from "react";
import MovieDetail from "./pages/MovieDetail";





const App = () => {
    let [movies, setMovies] = useState([])

    const [query, setQuery] = useState('')

    let [pages, setPages] = useState(1)

    let [movietype, setMovietype] = useState('')
    
    const routes = [
        {
            path: "/",
            element: <Home movies={movies} setMovies={setMovies} query={query} setQuery={setQuery} pages={pages} setPages={setPages} movietype={movietype} setMovietype={setMovietype} />,
            children: [
                {
                    path: "/movies",
                    element: <Movies  />,
                },
            ],  
        },
        {
            path: "/moviesdetails",
            element: <MovieDetail  />,
        }
    ];

    const router = createBrowserRouter(routes, {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        },
    });





    return <RouterProvider
        router={router}
        future={{
            v7_startTransition: true,
        }}
    />
}

export default App