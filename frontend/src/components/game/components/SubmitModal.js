import React from 'react';
//import ReactDOM from 'react-dom';

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FBF9FF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000
}

const SubmitModal = (props) => {
    if(!props.view) {
        return null;
    }
    else {
        return (

            <>
            <div style={OVERLAY_STYLE} />
                <div style={MODAL_STYLE}>
                    <div className="modal-header">
                        <h5 className="modal-title">Right Answer</h5>
                    </div>
                    <div className="modal-body">
                        <p>{props.info.word}</p>
                        <p>{props.info.hint}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={props.close}>Next</button>
                    </div>
                </div>
            </>
        );
    }
}

export default SubmitModal;