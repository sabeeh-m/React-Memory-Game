import React , {Component} from 'react'
import './navpanel.css'


class Navpanel extends Component {
    
    constructor(props){
        
        super(props)
        
        
    }
        render(){
            
            
            return(
                
                <div className="navpanel">
                <nav >
                <button onClick={this.props.buttonhandler}>New Game </button>
                
                
                </nav>
                
                
                </div>
                
                
                
                
                
                
                )
            
            
            
            
            
            
        }
            
    
    
    
    
    
    
} 

export default Navpanel;