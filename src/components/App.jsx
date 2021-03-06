import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../reducers';
import SmartComponent from 'SmartComponent';
// create a redux store 
const store = createStore(reducers);

export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <div className="container text-center">
          <br/>
          <h3 className="text-success">Hello from App.jsx</h3>
          <br/>
          <p className="text-warning">Edit the <code className="text-danger">src/containers/App.jsx</code> to change the content</p>
          {/* import your components/containers here */}
          <SmartComponent />
          <p className="text-warning">Look at the <code className="text-danger">browser console</code> for props</p>          
        </div>
      </Provider>
    );
  }
}