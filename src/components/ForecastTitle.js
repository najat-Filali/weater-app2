import React from 'react';
import ForecastChooseCity from './ForecastChooseCity'; 

class ForecastTitle extends React.Component{

    render(){
        return (
            <div>
                <ForecastChooseCity name={this.props.name}/>
                <div>{this.props.localtime}</div>
                <div>{this.props.name}</div>
            </div>

        );
    }
}

export default ForecastTitle;

