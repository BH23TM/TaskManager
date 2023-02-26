import React from 'react';

const newSession = () => {
    const style = {
        color: "white",
        backgroundColor: "lightBlue",
        padding: "70px",
        borderRadius: 10,
    }
    const open = () => {
        alert("You clicked the button");
    }
    return (
        <div style = { style }>
            Hello
            <button type="button" onClick={open()}>
                Start
            </button>
        </div>
        
    );
}

export default newSession;