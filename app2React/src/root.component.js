import React from 'react';
import {Provider, connect} from 'react-redux';
import Catalog from './cart';
import reactLogo from '../assets/react-logo.png'


export default class Root extends React.Component {


    state = {
      store: this.props.store,
      globalEventDistributor: this.props.globalEventDistributor,
    };

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {

        let ret = <div></div>;

        if (this.state.store && this.state.globalEventDistributor) {
            ret =
                <Provider store={this.state.store}>
                    <div style={{marginTop: 100}}>
                        <img src={reactLogo} style={{width: 100}}/> <br />
                        This was rendered by App2, which is written in React.
                        <Catalog globalEventDistributor={this.state.globalEventDistributor}/>
                    </div>
                </Provider>
        }

        return ret;
    }
}
