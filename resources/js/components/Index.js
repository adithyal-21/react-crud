import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            contacts : []
        }
    }
    componentDidMount(){
        axios.get('/api/contact')
        .then(response => {
            this.setState({
                contacts : response.data
            })

        }).catch(err => console.log(err));
    }
    render()
    {
        return (
         
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">All Details</div>
            <Link to="/add" className="btn btn-primary">Add</Link>
                        <div className="card-body">
                        <table class="table">
            <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Edit</th>
            <th scope="col">check</th>
        
            </tr>
            </thead>
            <tbody>
            {
            this.state.contacts !== null ?
            this.state.contacts.map(contac => (
            <tr>
                <td>{contac.id}   </td>
            <td>{contac.name}</td>
            <td>{contac.tel}</td>
            <td>  <Link to={`/${contac.id}/edit`} className="btn btn-primary">Update</Link>  </td>
        <td>  <Link to="/check" className="btn btn-primary">check</Link></td>
            </tr>
            ))
            :
            null
            }
            
            </tbody>
            </table>
            </div></div></div></div></div>
 
        );
    }
}


export default Index;


