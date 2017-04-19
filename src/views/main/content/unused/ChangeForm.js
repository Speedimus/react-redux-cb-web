import React, { Component } from 'react';
import { CREATE_CHANGE } from '../../../../actions/actions';
import { connect } from 'react-redux';

class ChangeForm extends Component {
    render() {
        const { change, onDone } = this.props

        return (
            <form id="changeForm" onSubmit={onDone}>
                <input type="hidden" id="id" defaultValue={change.id} />
                <input type="text" id="changeName" defaultValue={change.name} />
                <input type="text" id="changeDisk" defaultValue={change.disk_quotamb}/>
                <input type="text" id="changeMemory" defaultValue={change.memory_quotamb}/>
                <input type="submit" id="submit" />
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        change: state.changeForm
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDone: (event) => { dispatch( { type: CREATE_CHANGE, event: event } ) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeForm);

