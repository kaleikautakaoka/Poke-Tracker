import React from 'react';

//function for a add button to add a new pokemon that will use props to spread all past props into this element
function AddBtn(props) {
    return (
        <span className="add-btn" {...props} role="button" tabIndex="0">
        Add
        </span>
    );
    }

export default AddBtn;