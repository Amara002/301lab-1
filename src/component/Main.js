import React from 'react';
import HorndBeast from './HorndBeast';
import horndBeastData from './horndBeastData.json';
import SelectedBeast from './SelectedBeast';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            horndBeastData: horndBeastData,
            show : false 
        }
        // const [show, setShow] = useState(false);
    }


    // showModel = () => {
    // console.log('amara');
     setShow = (active) => {
         this.setState ({
             show : active 
         })

    }
         
         handleClose = () => this.setShow(false);
         handleShow = () => this.setShow(true);
         
    // }




    // showModel = () =>{
    //     this.setState({
    //         handleClose : this.state.handleClose = () => setShow(false)

    //     })
    // }
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    render() {
        return (
            <>
                <h2>parent</h2>
                {


                    horndBeastData.map((item,indx) => {
                        return (


                            <HorndBeast
                                title={item.title}
                                imgUrl={item.image_url}
                                handleShow = {this.handleShow}
                                description={item.description}
                                indx = {indx}


                            />
                        )
                    })
                }

                <SelectedBeast
                    beastArr={this.state.horndBeastData}
                    // showModel={this.showModel}
                    handleClose = {this.handleClose}
                    handleShow = {this.handleShow}
                    show = {this.state.show}
                
                />
                {/* find( ({ name }) => name === 'cherries' ); */}

            </>
        )





    }

}
export default Main;