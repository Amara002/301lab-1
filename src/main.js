import React from 'react';
import HorndBeast from './hornedbeasts';
import HorndBeast1 from './hornedbeasts1';


class Main extends React.Component{

    render(){
        return(
            <div>

            {/* <div>
                <h2>
                    UniWhol
                </h2>
                <img src="https://i.imgur.com/qN821Zu.jpg" alt="first"/>
                <p>A unicorn and a narwhal nuzlling their horns</p>

            </div>
            <div>
                <h2>
                    UniWhol
                </h2>
                <img src="https://i.imgur.com/qN821Zu.jpg" alt="first"/>
                <p>A unicorn and a narwhal nuzlling their horns</p>

            </div> */}
            <HorndBeast/>
            <HorndBeast1/>

            
            </div>
        )
    }
}
export default Main;