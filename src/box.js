import React , {Component} from 'react'
import './box.css'


class Box extends Component {
    static defaultProps={
        
        cardposition:0
        
    }
    constructor(props){
        
        
        super(props)
    
        
        
        
        
        
        
    }
    
    render(){
        
        
        return(
            
            <div className="maindiv">
            
            {this.props.cardposition  ? 
            (
            <div id={this.props.id}  style={{backgroundColor:this.props.color}} className="box-class"> </div> )
            :(
            <div id={this.props.id} onClick={this.props.onClick} style={{backgroundColor:"grey"}} className="box-class"> </div>
            
            
            
            )
            
            }
            
            </div>
            
            
            
            )
        
        
        
        
        
    }
    
    
    
    
    
    
    
}

export default Box