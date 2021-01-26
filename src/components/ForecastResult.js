import React from 'react';

class ForecastResult extends React.Component{

    render(){
        return (   
            <div>
                <p>{this.props.temperature}</p>
                <p>{this.props.weather_descriptions}</p>
                <p>{this.props.wind_speed}</p>
                <p>{this.props.humidity}</p>
                <span >{this.props.weather_icons}</span>
            </div>
        );
    }
}

export default ForecastResult;