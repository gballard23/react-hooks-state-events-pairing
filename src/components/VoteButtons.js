import React, { useState } from "react";


function VoteButtons({upVote, downVote}){
    const [like, setLikes] = useState(upVote);
    const [disLike, setDisLikes] = useState(downVote);
    console.log(like)
    console.log(disLike)

    function handleLikeClick(){
        setLikes((like) => like + 1)
    }

    function handleDisLikeClick(){
        setDisLikes((disLike) => disLike - 1)
    }



    


    return(
        <div>
            <button onClick={handleLikeClick}>{like}</button>
            <button onClick={handleDisLikeClick}>{disLike}</button>
        </div>
        );
   


}

export default VoteButtons;