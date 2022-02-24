import React from "react";
import video from "../data/video.js";
import HideButton from "./HideButton.js";
import VoteButtons from "./VoteButtons.js";


function App() {
  console.log("Here's your data:", video);

 
  
 

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <div>
        <h1>{video.title}</h1>
      </div>
      <div>
        <h4>{video.views} Views | Uploaded {video.createdAt}</h4>
      </div>
      <VoteButtons upVote={video.upvotes} downVote={video.downvotes}/>
      <HideButton comments={video.comments} />
    </div>

  );
}

export default App;
