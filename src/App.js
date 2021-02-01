import './App.css';
import React, { Component } from 'react'; 
import { Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      chkPassword: 'P@$$W0RD',
      isLogin: false
    }; 
  } 
  
  chkLogin = () => {
    if(!this.state.password || !this.state.username){
        alert("กรุณากรอก Username หรือ Password")
    }
    else if(this.state.password === this.state.chkPassword){
        this.setState({isLogin : true})
    }
    else{
        alert("กรุณากรอก Password ให้ถูกต้อง")
    }
  }

  render() {
    return ( 
        <div className="container">  
            {/* <form >
            <h1>Login</h1>
            <div>Username :</div>
              <input type="text" />
              <button onClick={() =>this.sendAPI()} >Submit</button>
            </form>
            <h1>Grade : {this.state.Grade}</h1>  */}
            {!this.state.isLogin ? 
              <Row className="w-100"> 
                  <Col xs={12} className="d-flex justify-content-center">
                    <h1>Login</h1>
                  </Col>&nbsp;
                  <Col xs={12} className="d-flex justify-content-center">
                    <span>Username : </span>
                    <input type="text" onChange={(e) => {this.setState({username: e.target.value})}} />
                  </Col>&nbsp;
                  <Col xs={12} className="d-flex justify-content-center">
                    <span>Password : </span>
                    <input type="password" onChange={(e) => {this.setState({password: e.target.value})}}/>
                  </Col>&nbsp;
                  <Col xs={12} className="d-flex justify-content-center">
                    <Button onClick={(e) => {this.chkLogin()}}>login</Button>
                  </Col>
              </Row>
            : <Row className="w-100"> 
                <Col xs={12} className="d-flex justify-content-center">
                  <h1>ยินดีต้อนรับ {this.state.username}</h1>
                </Col>&nbsp;
                <Col xs={12} className="d-flex justify-content-center">
                  <Button onClick={(e) => {this.setState({isLogin: false})}}>logout</Button>
                </Col>
            </Row>}
        </div> 
    );
  }
}
export default App;
