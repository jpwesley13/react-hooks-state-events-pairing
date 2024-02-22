import React from "react";

function Commentsection({video}) {
    const {comments} = video
    return (
        <div>
            <hr />
            <h2>{comments.length} Comments</h2>
            {comments.map(comment => (
                <div>
                    <h3>{comment.user}</h3>
                    <span>{comment.comment}</span>
                </div>
            ))}
        </div>

    )
}

export default Commentsection;