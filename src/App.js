import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import horndBeastData from './components/horndBeastData.json';
import SelectedBeast from './components/selectdBeast.js';



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            horndBeastData: horndBeastData,
            show: false,
            selected: {},

        }
        // const [show, setShow] = useState(false);
    }
    showModal = (title) => {
        let selectedBeast = horndBeastData.find(item => {
            if (item.title === title) {
                return item;
            }
        }

        )
        this.setState({
            show: true,
            selected: selectedBeast,
        })
    };

    handleClose = () => {
        this.setState({
            show: false
        })
    };

    showFilterd = (filterdBeast) =>{
        this.setState({
            horndBeastData : filterdBeast
        })
    };



    //      showModel = () => {
    //      console.log('amara');
    //     setShow = (active) => {
    //         this.setState ({
    //             show : active 
    //         })

    //    }



    render() {
        return (
            <>
                <Header />
                <Main horndBeastData={this.state.horndBeastData} showModal={this.showModal} showFilterd={this.showFilterd} />
                <Footer />
                <SelectedBeast
                    horndBeastData = {this.state.horndBeastData}
                    show={this.state.show}
                    handleClose={this.handleClose}
                    selected={this.state.selected}
                />
            </>
        )
    }
}

export default App;










