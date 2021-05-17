import React from 'react';
import HorndBeast from './HorndBeast';
import horndBeastData from './horndBeastData.json'

class Main extends React.Component {

    


    render() {
        return (
            <>
                <h2>parent</h2>
                {


                    horndBeastData.map(item => {
                        return (


                            <HorndBeast
                                title={item.title}
                                imgUrl={item.image_url}
                                description={item.description}


                            />
                        )
                    })
                }


            </>
        )





    }

}
export default Main;