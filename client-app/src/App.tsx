import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
class App extends Component {
  state={
    values:[]
  }
  componentDidMount() {
    Axios.get("http://localhost:5000/api/values")
    .then((response)=>{
      this.setState({values:response.data})
    })
  }
  
  render(){
    return (
      <div >
        <Header as='h2'>
        <Icon name='users' />
        <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.values.map((value:any)=>(
          <List.Item key={value.id}>{value.name}</List.Item>
          ))} 
        </List>
      </div>
    );
  }
}

export default App;