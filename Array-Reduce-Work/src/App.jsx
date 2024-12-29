import React from 'react'

const App = () => {

  const videos = [
    { id: 1, title: "Video 1", time: "1:10" },
    { id: 2, title: "Video 2", time: "2:14" },
    { id: 3, title: "Video 3", time: "3:44" },
    { id: 4, title: "Video 4", time: "5:05" },
    { id: 5, title: "Video 5", time: "6:03" },
    { id: 6, title: "Video 6", time: "12:39" },
    { id: 7, title: "Video 7", time: "1:56" },
    { id: 8, title: "Video 8", time: "2:10" },
    { id: 9, title: "Video 9", time: "3:14" },
    { id: 10, title: "Video 10", time: "4:05" },
    { id: 11, title: "Video 11", time: "5:03" },
    { id: 12, title: "Video 12", time: "6:39" },
  ];

  const totalTimeInSeconds = videos.map((v) => v.time)
  .map((time) => {
    const [min, sec] = time.split(":").map(parseFloat);
    return (min * 60) + sec;
  })
  .reduce((total, videoSecond) => total + videoSecond);


const minutes = Math.floor(totalTimeInSeconds / 60);
const seconds = totalTimeInSeconds % 60;

const totalTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className='parent'>
      {videos.map((elem)=>{
       return <div className='maindiv'>
          <h1>{elem.title}</h1>
          <p>Duretion {elem.time}</p>
        </div>
      })}
      <div>
        <div className="totalTime">
          <h2>Total video :</h2>
          <h2>Total Time :
          {totalTime}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default App