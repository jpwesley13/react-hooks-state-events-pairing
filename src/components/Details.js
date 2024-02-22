import React from "react";

function Details({ video }) {
    const {title, views, createdAt} = video

    return (
        <div className="body">
            <h1>{title}</h1>
            <span>{views} Views | Uploaded {createdAt}</span>
        </div>
    )
}

export default Details;