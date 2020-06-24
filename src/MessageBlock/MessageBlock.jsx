import React from 'react';
import mb from './MessageBlock.module.css'
import getRandomimg from './no_back.jsx'
import getSocial from './social.jsx'
import {Spring} from 'react-spring/renderprops'
import videoSet from './videoBack.jsx'
class MessageBlock extends React.Component {

    render () {
        let size = this.props.text.length  ;
        let maxSize = 60;
        let minSize = 22;
        if (size> maxSize){
            size = maxSize
        } else if (size< minSize){
            size = minSize;
        }
        size = 26/(size/40)
      
   return(
     
     <div className={mb.wrapper}>
      <div style={{background: this.props.back? "url(" + this.props.back + ")": getRandomimg(1, 6), backgroundSize: "cover" }} className={mb.messBlock}>
        {videoSet(this.props.backVideo)}
        <Spring reset config={{duration: 2000, delay: 2000}}from={{background: this.props.back? "rgb(23, 126, 230)" : "white", width: this.props.backVideo||this.props.back? "35%":"91%", height: this.props.backVideo||this.props.back ? "14%":"91%"}} to={{background: this.props.back? "rgb(23, 126, 230)" : "white", width: "91%", height: "91%" }} >
          {props  => (
            <div  >
            <div id="messText" style={props}  className={mb.messBlock__social}>
            <Spring reset config={{duration: 1000, delay: 1}}from={{opacity:this.props.backVideo||this.props.back ? 0 : 1}} to={{opacity:1}} >
          {props  => (
            <div style={props} className={mb.messBlock__message }>
              <p  style={{fontSize:size, color: this.props.back? "white" : "black"}} className={mb.messBlock__messText}>{ this.props.text }</p>
           </div>
           )}
           </Spring>
           <div style={{ color: this.props.back? "white" : "rgb(23, 126, 230)"}}className={mb.messBlock__nick }>
            
              <p  style={{ color: this.props.back? "white" : "black"}} className={mb.messBlock__nickText}><div style={{ color: this.props.back? "white" : "rgb(23, 126, 230)", float: "left", marginRight: "8px"}}>{getSocial(this.props.social)} </div>  { this.props.nick }</p>
           </div>
           
           
           </div>
           </div>
          )}
        </Spring>
      
     </div>
   
     </div>
     
   )
    }
 };
 

 export default MessageBlock;