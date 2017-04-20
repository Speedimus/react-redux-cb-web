import React, { Component } from 'react';
import { CREATE_CHANGE } from '../../../actions/actions';
import { connect } from 'react-redux';
import ComplianceGrid from './complianceGrid/ComplianceGrid'

class ListChange extends Component {
    spaceArray( changes ) {
        return changes.map((change, i) => {
            return (
                <div key={i} id={`change${i}`} className="change">
                    <div icons >
                        <table>
                            <ComplianceGrid />
                        </table>
                    </div>
                    <h4 id="textName">{change.name}</h4>
                    <p id="textBlah">{change.disk_quotamb}</p>
                    <p id="textBlahBlah">{change.memory_quotamb}</p>
                </div>
            )
        })
    }

    render() {
        const { changes, addChangeHandler } = this.props

        return (
            <div id="listChange" className="listChange">
                <div>
                    <button id="addChange" onClick={addSpaceHandler}>Add Change</button>
                </div>
                <div id="changes">
                    <h2>changes</h2>
                    {this.spaceArray( changes )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        changes: state.changes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSpaceHandler: (event) => { dispatch( { type: CREATE_CHANGE } ) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListChange);
