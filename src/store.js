import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import forecast from './reducers/forecast';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const middleware = [
    thunk
];
let store = createStore((forecast),
    composeEnhancers(
        applyMiddleware(...middleware),
    )
);
export default store;