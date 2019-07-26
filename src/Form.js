import React, {Component} from 'react';
import store from './store';

class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: "",
      description: ""
    }

    this.trackTitle = this.trackTitle.bind(this);
    this.trackDescription = this.trackDescription.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleAddTimer = this.handleAddTimer.bind(this);
  }

  render(){
    return (
      <React.Fragment>
        <div className='form'>
          <span className=''>Title</span>
          <input type="text" value={this.state.title} onChange={this.trackTitle}/>
          <span className=''>Project</span>
          <input type="text" value={this.state.description} onChange={this.trackDescription}/>   
          <div className="buttons"> 
            <div className="update" onClick={this.handleUpdate}>Update</div>    
            <div className="cancel" onClick={this.handleCancel}>Cancel</div>   
          </div>
        </div>
      </React.Fragment>
    )
  }

  trackTitle(e){
    this.setState({
      title : e.target.value,
    });
  }

  trackDescription(e){
    this.setState({
      description : e.target.value,
    });
  }

  handleAddTimer(e){
    store.dispatch({type: 'ADD_TIMER'})
  }

  handleCancel(e){
    
  }

  handleUpdate(e){
    store.dispatch({type: 'UPDATE_TIMER'})
  }
}

export default Form;