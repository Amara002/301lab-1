import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HorndBeast from './HorndBeast';
import horndBeastData from './horndBeastData.json';
import { findDOMNode } from 'react-dom';


class SelectedBeast extends React.Component {

    // callShowModel = () => {

    //     this.props.showModel()
    // }



    render() {
        return (
            <>
                <Button variant="primary" onClick={this.props.handleShow}>
                    Launch demo modal
      </Button>

                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >

                        {


                            // horndBeastData.find(

                                horndBeastData.map((item, indx) => {
                                    return (


                                        <HorndBeast
                                            title={item.title}
                                            imgUrl={item.image_url}
                                            handleShow={this.handleShow}
                                            description={item.description}
                                            indx={indx}


                                        />
                                    )
                                })
                            // )
                        }
                        {/* <HorndBeast/>
            Woohoo, you're reading this text in a modal! */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
          </Button>
                        <Button variant="primary" onClick={this.props.handleClose}>
                            Save Changes
          </Button>
                    </Modal.Footer>
                </Modal>



            </>
        )





    }

}
export default SelectedBeast;