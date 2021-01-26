import React from 'react';
import ForecastForm from './ForecastForm';
import ForecastResult from './ForecastResult';
import ForecastTitle from './ForecastTitle'; 
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {fetchForecast} from '../actions/forecast'


class Forecast extends React.Component{
  constructor(props){
        super(props);
        this.state = {
            city : '',
            error : null,
        }
    }

    updateCity = (event) => {
        this.setState({
            city: event.target.value
        });
    }

    render(){
        console.log(this.props);
        const {forecast} = this.props; 
        return (
           
            <div>    
                {this.props.request ? (
                    <ForecastTitle localtime={forecast.location.localtime} name={forecast.location.name} />
                ): null}
       
                <ForecastForm onClick={()=>{this.props.fetchForecast(this.state.city)}} onChange={this.updateCity}/>

                {forecast.request ? (      
                    <ForecastResult 
                    wind_speed={forecast.current.wind_speed} 
                    weather_descriptions={forecast.current.weather_descriptions[0]} 
                    humidity={forecast.current.humidity} 
                    temperature={forecast.current.temperature}
                    weather_icons={forecast.current.weather_icons[0]}
                    />
                ): null}

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        forecast: state.forecast.forecast, 
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchForecast,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);