import React, {Component} from 'react';
import store from './store';

class Timers extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
    
    store.subscribe(() => {
      this.toggleTimer()
    })

    this.handleToggleTimer = this.handleToggleTimer.bind(this);
  }
  
  render() {
    return (
      <React.Fragment>
        <div>
          <div className='board'>
            <span className='title'>{this.state.title}</span>
            <span className='description'>{this.state.description}</span>
            <span className='time'>{this.state.time}</span>   
            <div className="icon"> 
              <i className="fa fa-trash"></i>    
              <i className="fa fa-edit"></i>   
            </div>
          </div>
          <div className={this.state.active ? 'active button' : 'inactive button'} onClick={this.handleToggleTimer}>
            <span>{!this.state.active ? "Start" :"Stop"}</span>
          </div> 
        </div>
      </React.Fragment>
    )
  }

  handleToggleTimer() {    
    store.dispatch({type: 'TOGGLE_TIMER'})
  } 

  toggleTimer(){
    if(!this.state.active){
      this.interval= setInterval( () => {
        this.setState(state => ({time :state.time+1}));
      }, 1000);
      this.setState({active: true})
    } else {
        clearInterval(this.interval);
        this.setState({active: false})
    }
  }  
}

export default Timers;