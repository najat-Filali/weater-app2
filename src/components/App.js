import React from 'react';
import {toggleLoader, updateForecast,fetchForecast} from "../actions/forecast";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Forecast from './Forecast'; 
import '../App.css';

class App extends React.Component{
    render(){
        //console.log(this.props);
        return (
            <div className="App">
                <Forecast/>
                <hr />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        forecast : state.forecast.forecast,
        loader: state.forecast.loader
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
         toggleLoader, 
         updateForecast,
         fetchForecast 
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)