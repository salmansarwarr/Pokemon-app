import React from 'react'

function Loading(props) {
    return (
        <div className='loading' style={props.dark ? {background:"rgb(161, 161, 161)"} : {background:"white"}}>
            <h1 style={props.dark ? {color: "white"} : {color:"black"}}>Loading</h1>
            <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading</span>
            </div>
            <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading</span>
            </div>
            <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading</span>
            </div>
        </div>
    )
}

export default Loading