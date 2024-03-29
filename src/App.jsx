import { useState, useEffect, useFetch } from 'react'
import './App.css'
import Header from './components/Header'
import { FaHeart } from 'react-icons/fa';
import LandingPage from './components/LandingPage';


function App() {

  const [videosData, setVideosData] = useState([]);
  const [favVideoData, setFavVideoData] = useState([]);
  const [favTitle, setFavTitle] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://video-api-dot-dj-virtual-spaces.el.r.appspot.com/");
        const result = await response.json();
        setVideosData(result.videosData);
        // console.log(videosData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addToFav = (video) => {

    const isAlreadyFav = favVideoData.some(favVideo => favVideo.video === video.videolink);

    if (!isAlreadyFav) {

      const fav_vid_data = {
        video: video.videolink,
        title: video.title,
        description: video.description,
        thumbnailUrl: video.thumbnailUrl
      }

      setFavVideoData([...favVideoData, fav_vid_data])
      setFavTitle(true)
      console.log(favTitle)
    } else {
      alert("item is already added")
    }
  }


  return (
    <>
      <Header />
      <LandingPage />

      <div>

        <h1 className={favTitle ? "fav-title" : "none"}>Favourites</h1>

        <div className="fav-vid-container">

          {favVideoData.map((video, index) => (
            <div key={index} className='video-container'>
              <div className="img">
                <a href={video.video}>
                  <img src={video.thumbnailUrl} alt={video.title} />
                  <h2 className='title'>{video.title}</h2>
                  <p className='description'>{video.description}</p>
                </a>
                <div className="added-to-fav-icon"><FaHeart className='icon' /></div>

              </div>
            </div>
          ))}

        </div>
      </div>

      <div>
        <h1 className='all-video-title'>All videos</h1>
        <div className='all-video-container'>
          {videosData.map((video, index) => (
            <div key={index} className='video-container'>
              <div className="img" >

                <a href={video.videolink} >
                  <img src={video.thumbnailUrl} alt={video.title} />
                  <h2 className='title'>{video.title}</h2>
                  <p className='description'>{video.description}</p>
                  <p className='tags'>Tags: {video.tags.join(', ')}</p>
                </a>

                <div className="add-to-fav-icon"><FaHeart className='icon' onClick={() => { addToFav(video) }} /></div>

              </div>
            </div>
          ))}
        </div>
      </div >

    </>
  )
}

export default App
