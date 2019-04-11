import React, { Component } from 'react';

import './App.css';
import Box from  './box'
import Navpanel from './navpanel'

const cardState={
      
      hiding:0,
      showing:1,
      matching:2
      
    }


class App extends Component {
      
    
  constructor(props){
    super(props)
  
  
    
        
        
        
        
          let cards=
    [
      {id:0, cardstate:cardState.hiding ,color:"violet"},
      {id:1,cardstate:cardState.hiding ,color:"violet"},
      {id:2,cardstate:cardState.hiding ,color:"purple"},
      {id:3,cardstate:cardState.hiding ,color:"purple"},
      {id:4,cardstate:cardState.hiding,color:"orange"},
      {id:5,cardstate:cardState.hiding,color:"orange"},
      {id:6,cardstate:cardState.hiding,color:"black"},
      {id:7,cardstate:cardState.hiding,color:"black"},
      {id:8,cardstate:cardState.hiding ,color:"blue"},
      {id:9,cardstate:cardState.hiding,color:"blue"},
      {id:10,cardstate:cardState.hiding ,color:"green"},
      {id:11,cardstate:cardState.hiding,color:"green"},
      {id:12,cardstate:cardState.hiding,color:"red"},
      {id:13,cardstate:cardState.hiding,color:"red"},
      {id:14,cardstate:cardState.hiding,color:"yellow" },
      {id:15,cardstate:cardState.hiding,color:"yellow" },
        ]
  
    
  
          
          
          this.state={ cards:shuffle(cards), currentItem:"" }
          this.handleClick=this.handleClick.bind(this)
          this.handleNewGame= this.handleNewGame.bind(this)
  }
  

handleNewGame(e){
      let cards=
    [
      {id:0, cardstate:cardState.hiding ,color:"violet"},
      {id:1,cardstate:cardState.hiding ,color:"violet"},
      {id:2,cardstate:cardState.hiding ,color:"purple"},
      {id:3,cardstate:cardState.hiding ,color:"purple"},
      {id:4,cardstate:cardState.hiding,color:"orange"},
      {id:5,cardstate:cardState.hiding,color:"orange"},
      {id:6,cardstate:cardState.hiding,color:"black"},
      {id:7,cardstate:cardState.hiding,color:"black"},
      {id:8,cardstate:cardState.hiding ,color:"blue"},
      {id:9,cardstate:cardState.hiding,color:"blue"},
      {id:10,cardstate:cardState.hiding ,color:"green"},
      {id:11,cardstate:cardState.hiding,color:"green"},
      {id:12,cardstate:cardState.hiding,color:"red"},
      {id:13,cardstate:cardState.hiding,color:"red"},
      {id:14,cardstate:cardState.hiding,color:"yellow" },
      {id:15,cardstate:cardState.hiding,color:"yellow" },
        ]
  
  this.setState({cards:shuffle(cards), currentItem:""})
  
  
}



 handleClick(e){

var idealstate= this.state.cards.slice();
 idealstate[e.target.id].cardstate= cardState.showing
 
var id= e.target.id
idealstate.currentIndex=id;
  this.setState((prevState,props)=>{
    
    if(this.state.currentItem==""){
      
        idealstate[id].cardstate= cardState.showing     
      return  {
          
          currentItem: id,
          cards:idealstate
          
        }
    }
    
    
    if(idealstate[prevState.currentItem].color == idealstate[id].color && idealstate[prevState.currentItem].cardstate==cardState.showing){
      idealstate[prevState.currentItem].cardstate=cardState.matching
      idealstate[id].cardstate=cardState.matching
     console.log("cond 1")
        return{
    
    cards:idealstate, currentItem:id
    
  }
        
     
    }else if( idealstate[prevState.currentItem].cardstate==0 || idealstate[prevState.currentItem].cardstate==1  && idealstate[prevState.currentItem].color != idealstate[id].color){
        
      idealstate[prevState.currentItem].cardstate=cardState.hiding  
      console.log(idealstate[prevState.currentItem])
      console.log("cond 2") 
      return{
    
    cards:idealstate, currentItem:id
    
  }   
  
  
  
          
      }     else if( idealstate[prevState.currentItem].cardstate==2 ){
                        idealstate[id].cardstate=cardState.showing
        
      console.log("cond x") 
      console.log(prevState.currentItem+"  "+id)
      return{
    
    cards:idealstate, currentItem:id
    
  }}    
      
      
      
    
    
    console.log(prevState.currentItem+"  "+id)
    console.log()
  
    
  
    
  })
      
      
  }
  
  
  
   
  
  render() {
  


  
  
    return (
      <div className="App">
      <Navpanel  buttonhandler={this.handleNewGame}/>
      {this.state.cards.map((card,i)=> 
      
       <Box id={i} color= {card.color} cardposition= {card.cardstate}  onClick= {this.handleClick} />  
      )}
        
        
    
            </div>
    );
  }
}


function shuffle (array){
     var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
    
    }
    
    

export default App;

