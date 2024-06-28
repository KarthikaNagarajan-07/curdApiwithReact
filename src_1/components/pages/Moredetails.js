
import React from 'react';
import {Modal} from 'antd';

class MoreDetails extends React.Component{

    render(){

       
        console.log("propsss",this.props)
      
        
        return(
            <div>
               {/* {
                   this.props.details.map((detail,index) => {
                       return(
                       <div>
                           <ul>
                               <li key={index}>{detail.id}</li>
                           </ul>
                    </div>
                    )
                   }) 
               } */}
            </div>
    

        )   
    }
}
export default MoreDetails;
