/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './components/App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import { CookiesProvider } from 'react-cookie';


const AppRedux = () => (
    <Provider store={store}>
        <CookiesProvider>
            <App/>
        </CookiesProvider>
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppRedux);
