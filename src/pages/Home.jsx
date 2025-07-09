import { useEffect, useState, } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import instance from '../api/omdb'
import Navbar from '../Component/Navbar';
import axios from 'axios';
import Movies from '../Movies';
import { Link } from 'react-router';
const Home = ({ movies, setMovies, query, setQuery, pages, setPages , movietype, setMovietype }) => {
    let[ totalpages, setTotalpages] = useState(0)

    // const movie = instance;
    useEffect(() => {
 const delayDebounce = setTimeout(() => {        if (query.trim() !== '') {
            const fetchData = async () => {
                const url = `https://www.omdbapi.com/?s=${query}&apikey=d987e76f&page=${pages}&type=${movietype}`;
                console.log("Fetching from:", url);

                try {
                    const response = await axios.get(url);
                    const data = response.data;

                    if (data.Response === "True") {
                        setMovies(data.Search);
                        setTotalpages(data.totalResults);

                    } else {
                        setMovies([]);
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                }

            }

            fetchData();
        }}, 300);
        return () => clearTimeout(delayDebounce);
    }, [query, pages , movietype]);



  





    useEffect(() => {
        console.log(movies)
    }, [])




    return (
        <div>
            <Navbar  setQuery={setQuery}  setMovietype={setMovietype} />

                       <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                loop="true"
            >
                <SwiperSlide><Link to={"/moviesdetails?id=tt36711188"}><img className='' src="https://wallpapercave.com/wp/wp15474023.jpg" alt="" /></Link></SwiperSlide>
                <SwiperSlide><Link to={"/moviesdetails?id=tt2096350"}><img className='' src="https://wallpapercave.com/wp/wp15495282.jpg" alt="" /></Link></SwiperSlide>
                <SwiperSlide><Link to={"/moviesdetails?id=tt14205554"}><img className='' src="https://wallpapercave.com/wp/wp15515592.jpg" alt="" /></Link></SwiperSlide>
                <SwiperSlide><Link to={"/moviesdetails?id=tt26743210"}><img className='' src="https://wallpapercave.com/wp/wp15495330.jpg" alt="" /></Link></SwiperSlide>
                <SwiperSlide><Link to={"/moviesdetails?id=tt26342662"}><img className='' src="https://wallpapercave.com/wp/wp15532853.jpg" alt="" /></Link></SwiperSlide>
                <SwiperSlide><Link to={"/moviesdetails?id=tt10676052"}><img className='' src="https://wallpapercave.com/wp/wp13798652.jpg" alt="" /></Link></SwiperSlide>



            </Swiper>


            <Movies movies={movies} pages={pages} setPages={setPages} totalpages={totalpages} query={query} />
        </div >
    )
}

export default Home