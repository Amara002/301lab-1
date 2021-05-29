import React from 'react';
import HornedBeast from './HornedBeast';
import horndBeastData from './horndBeastData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {
    submitForm = (event) => {

        let numberOfHorns = event.target.value;
        let hornsData = horndBeastData;
        let filterdBeast;
        if (numberOfHorns) {
            filterdBeast = hornsData.filter(item => {
                if (item.horns == numberOfHorns) {
                    return item;
                }
            })

        } else {
            filterdBeast = hornsData;
        }
        this.props.showFilterd(filterdBeast);
    };

    render() {
        return (
            <>
                {/* <HornedBeast
            title = {"UniWhal"}
            imgURL = {"http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"}
            descreption = {"A unicorn and a narwhal nuzzling their horns"}
            />
           <HornedBeast
              title = {"Rhino Family"}
              imgURL = {"https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"}
              descreption = {"Mother (or father) rhino with two babies"}
           /> */}
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Filter By number Of Hornes</Form.Label>
                        <Form.Control as="select" onChange={this.submitForm}>
                            <option value=''>All</option>
                            <option value='1'>One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                            <option value='100'>Wow</option>
                        </Form.Control>

                    </Form.Group>
                </Form>

                {this.props.horndBeastData.map(item => {
                    return (
                        <HornedBeast

                            title={item.title}
                            imgUrl={item.image_url}
                            description={item.description}
                            showModal={this.props.showModal}

                        />
                    )
                })}



            </>
        )
    }
}

export default Main;

