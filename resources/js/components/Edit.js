import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Edit extends Component{
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
    componentDidMount(){
        const id =this.props.match.params.id;
        axios.get(`/api/contact2/${id}/edit`).then(response => {
            this.setState({
                name : response.data.name,
                tel :  response.data.tel

            })
        }).catch(err => console.log(err));
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
        const id =this.props.match.params.id;
        axios.put(`/api/contact3/${id}/update`,{
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
                        <div className="card-header">Edit Component</div>

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

export default Edit;


