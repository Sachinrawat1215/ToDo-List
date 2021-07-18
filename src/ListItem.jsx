import React from 'react';

const ListItem = (props) => {

    return <React.Fragment>
        <li> <div className="show-item">{props.text}</div> <i id="done" className="fas fa-check"></i><i id="delete" className="fas fa-trash-alt" onClick={() => {
            props.delete(props.id)
        }} ></i> </li>
        <hr />
    </React.Fragment>
}

export default ListItem;