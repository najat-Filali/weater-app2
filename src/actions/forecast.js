
export const updateForecast = (forecast) => {
    return {
      type : 'UPDATE_FORECAST',
      forecast
    }
  };
  
  export const toggleLoader = (status) => {
    return {
        type : 'UPDATE_LOADER',
        status
    }
  };
  
  export const fetchForecast = city => {
    return async (dispatch) => {
      dispatch(toggleLoader(true)); 
      const response = await fetch(`http://api.weatherstack.com/current?access_key=8fc9477aca916528376a05d56312b97b&query=${city}`);
      const data = await response.json();
      console.log(data);
      dispatch(updateForecast(data));
      dispatch(toggleLoader(false));
  }
  };