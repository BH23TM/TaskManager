import React, { Component } from 'react';


export default class Welcome extends Component {
    render() {
        const style = {
            color: "white",
            backgroundColor: "lightBlue",
            padding: "70px",
            borderRadius: 10,
        };
        return (
            <h1 style = {style}> Hello, Nick </h1>
        );
    }
}


/*const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Nick"/>
root.render(element);
*/
