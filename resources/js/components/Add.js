import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Add extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            tel : ''
        }
        this.handleNameInputChange = this.handleNameInputChange.bind(this);
        this.handleTelInputChange = this.handleTelInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleNameInputChange(event){
        this.setState({
            name : event.target.value
        })

    }

    handleTelInputChange(event){
        this.setState({
            tel : event.target.value
        })

    }
    handleFormSubmit(event){
        event.preventDefault();
        axios.post('/api/contact1/create',{
            name : this.state.name,
            tel : this.state.tel
        }).then(_response => {
            this.setState({
                name : '',
                tel : ''
              
            })
            this.props.history.push('/')
        }).catch(err=>console.log(err));
    }
  render(){
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Add Component</div>

                        <div className="card-body">

                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                             
                                <input type="text" 
                                required
                                onChange={this.handleNameInputChange}
                                value={this.state.name}
                                
                                className="form-control"  placeholder="name" />
                            
                            </div>
                            <div className="form-group">
                             
                             <input type="text" 
                             required
                             onChange={this.handleTelInputChange}
                             value={this.state.tel}
                             
                             className="form-control"  placeholder="phone" />
                         
                         </div>
                        
                            <input type="submit" className="btn btn-primary" value="submit"/>
                    </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Add;


