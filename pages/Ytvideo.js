import axios from 'axios';

const apiKey = 'AIzaSyCi70A3sB_G5yDCR2tobE1FavCXvcB1dEs'; // Replace with your actual YouTube Data API key

export default function VideoPage({ mp4Url }) {
  console.log(mp4Url)
  return (
    <div>
      <h1>YouTube Video</h1>
      <video controls>
        <source src={mp4Url} type="video/mp4" />
      </video>
    </div>
  );
}

export async function getServerSideProps() {
  const videoId = 'yC3PrqXKlAk'; // Replace with the ID of the YouTube video you want to retrieve

  try {
    // Make an API request to get video details
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoId}&key=${apiKey}`);
    const videoDetails = response.data.items[0];

    // Get the highest resolution available for the video
    const { width, height } = videoDetails.contentDetails.videoQuality.split('x').reduce((a, b) => (+a > +b) ? a : b);
    const highestRes = `${width}x${height}`;

    // Create the MP4 download URL
    const mp4Url = `https://www.youtube.com/watch?v=${videoId}&v=${videoId}&has_verified=1&hd=${highestRes}`;

    return {
      props: {
        mp4Url,
      },
    };
  } catch (error) {
    console.error('Error retrieving video details:', error);

    return {
      props: {
        mp4Url: null,
      },
    };
  }
}
