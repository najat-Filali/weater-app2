let initialState = {
    forecast: {},
  	loader: false
};

export const forecast = (state = initialState, action) => {
  switch (action.type) {
      case 'UPDATE_FORECAST':
          return {
            ...state,
            forecast
          };

      case 'UPDATE_LOADER':
          return {
            ...state,
            loader
          };
          
      default :
          return state;
  }
};

export default forecast;