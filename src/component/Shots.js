import React, { Component } from "react"
import Tab from "./Tab"
import CardModel from "./CardModel"


class Shots extends Component {

   state = {
       tableau:Tab
   }
 
render() {

   const boucleTab = this.state.tableau.map((obj) => {

       return (

           <CardModel key={Math.random()} image = {obj.img} />
       )
   })  
   
   return(
       <div id="wrap">{boucleTab}</div>
   )
}
}
export default Shots;