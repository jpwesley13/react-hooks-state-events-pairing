import React, {useState} from "react";

function Buttons({ video }) {
    const {upvotes, downvotes} = video
    const [likes, setLikes] = useState(upvotes)
    const [dislikes, setDislikes] = useState(downvotes)

    

    return (
        <div className="button-container">
            <span>
                <button
                onClick={() => setLikes(likes => likes +1)}>{likes}👍</button>
                <button
                onClick={() => setDislikes(dislikes => dislikes +1)}>{dislikes}👎</button>
            </span>
        </div>
    )
}

export default Buttons;