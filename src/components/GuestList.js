import React, { Component } from 'react';
import Guest from './Guest';

class GuestList extends Component{
    static defaultProps = {
        data: []
    };

    render() {
        const { data } = this.props;
        const list = data.map(
            note => (<Guest  note={note}/>)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default GuestList;