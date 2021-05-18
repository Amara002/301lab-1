import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class HorndBeast extends React.Component {
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

            <div   className='beast' style={{display: 'inline-block'}}>
                <Card key ={this.props.indx} style={{ width: '18rem'}} >
                    <Card.Img   onClick ={this.props.handleShow} variant="top" src={this.props.imgUrl} style={{height:'18rem'}} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                          {this.props.description}
                           </Card.Text>
                        <Button variant="primary" onClick={this.inceaseNumberOfVotes} >Vote ❤️: {this.state.numberOfVotes}</Button>
                    </Card.Body>
                </Card>





                {/* <h2>{this.props.title}</h2>
                  <img src={this.props.imgUrl} alt={this.props.title} title={this.props.title}/>
                   <p>{this.props.description}</p>
                  <button onClick={this.inceaseNumberOfVotes}>Vote ❤️: {this.state.numberOfVotes}</button>
                */}
            </div>



        )





    }

}
export default HorndBeast;