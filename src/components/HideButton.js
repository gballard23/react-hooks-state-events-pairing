import React, { useState } from "react";
import Comments from "./Comments";

function HideButton({comments}){
    const [isHidden, setIsHidden] = useState(true)
    console.log(isHidden)
    function handleClick(){
        setIsHidden((isHidden) => !isHidden)
    }

    const commentsToDisplay = comments.filter(
       function hide(x){
           if(isHidden === true){
               return x
           }
       }
    )

    console.log(commentsToDisplay)

    



    


    return (
        <div>
            <div>
              <button onClick={handleClick}>{isHidden ? "Hide Comments" : "Show Comments"}</button>  
            </div>
            <div>
                <h2>{comments.length} Comments</h2>
            </div>
            <Comments comments={commentsToDisplay} />
        </div>
    )
}

export default HideButton;