import React from 'react';
import Displaydata from './display.json';
import Pagenotfound from './Pagenotfound';

const Display=(props)=> 
{

    const result=(i)=>
    {       

        let { pic }=Displaydata[i]

        return(<>
                <div className="container p-2 m-2">
                    <img src={ pic } alt="text" className="w-100" style={{ height:'500px' }} />
                </div>
            </>); 
    
    }


    switch(props.match.params.name) 
    {
        case '1 Image': return(<> { result(0) } </>); break;
        case '2 Image': return(<> { result(1) } </>); break;
        case '3 Image': return(<> { result(2) } </>); break;
        case '4 Image': return(<> { result(3) } </>); break;
        default: return(<Pagenotfound />); break;
    }

}

export default Display;
