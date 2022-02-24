import React from "react";

function Comments({comments}){
    
    const commentSection = comments.map((com) => (
        <div key={com.user}>
            <div>
                <h3>{com.user}</h3>
            </div>        
            <div>
                <h5>{com.comment}</h5>
            </div>
        </div>
    
    ))

    return (
        <div>          
            {commentSection}
        </div>
    )
}

export default Comments;