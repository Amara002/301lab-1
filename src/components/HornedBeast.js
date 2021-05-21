import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfVotes: 0

        }


    }
    inceaseNumberOfVotes = () => {
        this.setState({
            numberOfVotes: this.state.numberOfVotes + 1
        })


    }

    render() {
        return (
            <>
                {/* <h2>{this.props.title}</h2>
            <img src={this.props.imgURL} alt={this.props.title} title={this.props.title}></img>
            <p>{this.props.descreption}</p>    */}

                <div className='beast' style={{ display: 'inline-block' }}>
                    <Card  style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={this.props.imgUrl} style={{ height: '18rem' }} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                            <Button variant="primary" onClick={this.inceaseNumberOfVotes} >Vote ❤️: {this.state.numberOfVotes}</Button>
                        </Card.Body>
                    </Card>
                </div>



            </>
        )
    }
}

export default HornedBeast;



