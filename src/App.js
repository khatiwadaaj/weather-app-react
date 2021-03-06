import React from 'react';


//custom components
import Titles from'./component/Titles';
import Form from './component/Form';
import Weather from './component/Weather';

const API_KEY= "1680dd668a7da443e728edcf91e51e87";


class App extends React.Component{
    state ={
        temparature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const data = await api_call.json();
        if(city && country){
            console.log(data);
            this.setState({
                temparature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ''
            })
        } else{
            this.setState({
                temparature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: 'Please enter the value.'
            })
        }
    }

    render(){
        return(
            <div> 
                <Titles />
                <Form getWeather={this.getWeather}/>
                <Weather 
                  temparature={this.state.temparature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                  
                />
            </div>
        );
    }
}


export default App;