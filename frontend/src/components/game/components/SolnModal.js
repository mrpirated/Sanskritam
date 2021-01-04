import React from 'react';
import ReactDOM from 'react-dom';

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

const SolnModal = (props) => {
    if(!props.open) {
        return null;
    }
    else {
        return ReactDOM.createPortal(

            <>
            <div style={OVERLAY_STYLE} />
                <div style={MODAL_STYLE}>
                    <div className="modal-header">
                        <h5 className="modal-title">Solution</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={props.close}>X</button>
                    </div>
                    <div className="modal-body">
                        <p>{props.body}</p>
                    </div>
                </div>
            </>,
            document.getElementById('portal')
        );
    }
}

export default SolnModal;