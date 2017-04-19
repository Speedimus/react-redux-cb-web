import React, {Component} from 'react';
import logo from '../../style/logo.svg';
import Search from './search/Search';

class Banner extends Component {
    render() {
        return (
        <div id="banner" className="banner">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Compliance Buddy</h2>
                <Search />
                {/*<Menu />*/}
            </div>
        </div>
        );
    }
}

export default Banner;
