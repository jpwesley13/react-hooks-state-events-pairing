import React, {useState} from "react";
import Commentsection from "./Commentsection";

function Comments({ video }) {
    const [seeComments, setSeeComments] = useState(true)

    function handleClick() {
        setSeeComments(!seeComments)
    }
    return (
        <div>
            <button 
            className="button-container"
            onClick={handleClick}>
                {seeComments ? "Hide Comments" : "Show Comments"}
            </button>
            {seeComments && (<Commentsection
            video={video} />)}
        </div>
    )
} //Rather than make two buttons, just make one whose content changes based on button status.
//The && part is like a life hack and I don't know if it's too powerful or not. "In this context, the && operator is used for conditional rendering in JSX. It allows us to conditionally render elements based on the truthiness of an expression. If the expression before && is truthy, the code after && will be executed and rendered. If the expression is falsy, the code after && will be skipped. It's a powerful way to conditionally render elements without needing an explicit if statement or ternary operator."

export default Comments;