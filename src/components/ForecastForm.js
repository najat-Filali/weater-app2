import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {fetchForecast} from '../actions/forecast'


class ForecastForm extends React.Component{
  /*  constructor(props){
        super(props);
        this.state = {
            city : ''
        }
    }

    updateCity = (event) => {
        this.setState({
            city: event.target.value
        });
    }

    fetchForecast = () => {
        this.props.fetchForecast(this.state.city)
    }
*/
    render(){
        return (
            <div>
                <input type="text" value={this.props.name} onChange={this.props.onChange} />
                <button onClick={this.props.onClick}>RECHERCHER</button>
                {this.props.loader
                        ? <div>loading ...</div>
                        : ''
                    }
        
            </div>
           );
    }
}

const mapStateToProps = (state) => {
    return {
        forecast: state.forecast.forecast, 
        loader : state.forecast.loader
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchForecast
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastForm);

