import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function CustomModal (props) {

    return (
        <Modal show={props.show} onHide={props.closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Heading Text</Modal.Title>
            </Modal.Header>

            <Modal.Body>{props.movieInfo.title}</Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export { CustomModal };