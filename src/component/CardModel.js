import React from 'react'
import '../style/CardModel.css';


const CardModel = (props) => {

        return(

            

                <div id="card" className="card">
                <img className="card-img-top" src={ props.image } alt=""/>
                <div className="card-body">
                <p className="card-text"></p>
                </div>
                </div>

          
        )
}


export default CardModel;