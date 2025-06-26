import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import HorizontalScrollCard from '../components/HorizontalScrollCard'
import UseFetch from '../hooks/UseFetch'


const Home = () => {
   const trendingData=useSelector(state=>state.movieData.bannerData)
    const { data : nowPlayingData } = UseFetch('/movie/now_playing')
  const { data : topRatedData } = UseFetch('/movie/top_rated')
  const { data : popularTvShowData } = UseFetch('/tv/popular')
  const { data : onTheAirShowData } = UseFetch('/tv/on_the_air')
  
  return (
    <div>
        <BannerHome/>
        <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true}/>
        <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>
        <HorizontalScrollCard data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"}/>
        <HorizontalScrollCard data={popularTvShowData} heading={"Popular TV Show"} media_type={"tv"}/>
        <HorizontalScrollCard data={onTheAirShowData} heading={"On The Air"} media_type={"tv"}/>
        
    </div>
  )
}

export default Home