#API :

weatherstack - Real-Time World Weather REST API

http://api.weatherstack.com/current?access_key=3039abac99304c25cdd95a9c74da95d1&query=Toulouse

🌶️ ##Première étape : Création du projet

Créer un nouveau projet React, installer l'ensemble des librairies nécessaires : 

Redux, 

React Redux, 

Thunk

Redux Dev Tools 

et enfin créer l'arborescence du projet 

components/

actions/

reducers/

store.js

🌶️ ##Intégration

Vous allez devoir intégrer la maquette suivante weather-app , en respectant les problématiques de séparation des responsabilités 

(il manque un petit bouton de validation de la ville pour lancer la recherche, ajoutez le)

On peut donc identifier les composants suivants :

App

Forecast

ForecastTitle

ForecastChoseCity

ForecastResult

ForecastForm

🌶️ ##Redux

Vous allez maintenant créer les fichiers de votre pattern Flux 😀

reducers/forecast.js

let initialState = {
    forecast: {},
  	loader: false
};

export const forecast = (state = initialState, action) => {
  switch (action.type) {
      case 'UPDATE_FORECAST':
          return {
            ...state
          };
      case 'UPDATE_LOADER':
          return {
            ...state
          };
      default :
          return state;
  }
};


actions/forecast.js

/*TODO*/
export const updateForecast = (forecast) => {
  /*TODO*/
};

export const toggleLoader = (status) => {
  /*TODO*/
};

export const fetchForecast = city => {
    return async dispatch => {
		/*TODO*/
    }
};

store.js (à faire vous même hein)