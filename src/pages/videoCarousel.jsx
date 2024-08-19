import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const videos = [
  { id: 1, title: "Video 1", url: "https://www.youtube.com/watch?v=lLQ6Uso0Tq8" },
  { id: 2, title: "Video 2", url: "https://www.youtube.com/watch?v=_OgaEIjZFUc" },
  { id: 3, title: "Video 3", url: "https://www.example.com/video3.mp4" },
  // Add more video objects as needed
];

const VideoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="video-carousel">
      <Slider {...settings}>
        {videos.map(video => (
          <div key={video.id}>
            <video width="100%" controls>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>{video.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel;
