import React from 'react';


class Titles extends React.Component{
   
    render(){
        return(
            <div>
                <h1>Weather Finder! <br/> React version: {React.version}</h1>
                <p>Find out Temparature, conditions and more.</p>
            </div>
        );
    }
}

export default Titles;