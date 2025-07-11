// import { useState } from 'react'
import { Link } from 'react-router'


const Movies = ({ movies, pages, setPages, totalpages, query }) => {



    const handleNextPage = () => {
        setPages((prevPage) => {
            const nextPage = prevPage + 1;
            return nextPage;
        })
        console.log(pages)
    }
    const handlePrevPage = () => {
        if (pages > 1) {
            setPages(pages - 1);
            console.log(pages - 1);
        }
    };

    return (
        <>
            <div className='container mx-auto my-20' id='search-results'>

                <ul>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5  '>
                        {movies.length > 0 ? (
                            movies.map((movie) => (
                                <div key={movie.imdbID} className='text-center rounded-md hover:scale-105 transition duration-300 font-medium drop-shadow-stone-50'>
                                    <Link to={`/moviesdetails?id=${movie.imdbID}`}>
                                        <img
                                            loading="lazy"
                                            src={movie.Poster}
                                            alt={movie.Title}
                                            width="300"
                                            height="450"
                                            className="mx-auto max-h-100 rounded-md w-full h-auto"
                                        />
                                        <h3 className='text-xl font-bold'>{movie.Title?.slice(0, 30)}</h3>
                                        <p>Year : {movie.Year}</p>
                                        <p>Type : {movie.Type}</p>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            query.trim() !== '' && (
                                <p className='text-center text-4xl font-bold text-red-600 col-span-full my-10'>
                                    No movies found for your search.
                                </p>
                            )
                        )}

                    </div>


                </ul>
                {query.trim() !== '' && (
                    <div className='flex justify-center gap-2 my-10'>
                        <button
                            onClick={handlePrevPage}
                            className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-md lg:text-lg font-medium text-white shadow-sm hover:bg-indigo-700'
                        >
                            Prev Page
                        </button>

                        <p className='px-4 py-2 text-md lg:text-lg font-medium'>
                            Page No {pages} of {Math.ceil(totalpages / 10)}
                        </p>

                        <button
                            onClick={handleNextPage}
                            className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-md lg:text-lg font-medium text-white shadow-sm hover:bg-indigo-700'
                        >
                            Next Page
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Movies