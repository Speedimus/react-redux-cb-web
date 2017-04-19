import React, {Component} from 'react';
import ListChange from './ListChange';
//import CreateForm from './CreateForm';
//import UpdateForm from './UpdateForm';

class Content extends Component {
    render() {
        return (
            <div id="content" className="content">
                <ListChange />
                {/*<CreateForm />*/}
                {/*<UpdateForm change={ pass in a change obj } /> */}
                <p className="App-intro">
                </p>
            </div>
        );
    }
}

export default Content;
