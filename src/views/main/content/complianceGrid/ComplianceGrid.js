import React, {Component} from 'react';
import ListChange from './ListChange';

class ComplianceGrid extends Component {
    render() {
        return (
            <div id={`complianceGrid${i}`} className="complianceGrid">
                <ListChange />
                {/*<CreateForm />*/}
                {/*<UpdateForm change={ pass in a change obj } /> */}
                <p className="App-intro">
                </p>
            </div>
        );
    }
}

export default ComplianceGrid;
