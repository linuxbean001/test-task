import React,{Component} from 'react';
import Image from '../../assets/login-page-side.jpg'
import './Login.scss';
import LoginService from '../../services/loginService';
import { connect } from 'react-redux'
import {getDataFile } from '../../redux/action/action'

const LoginServiceApi = new LoginService();

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
        email:'',
        password:'',
      }
  }

  componentDidMount(){
    // this.props.DataFileGetVoDispatch(loginVo)
  }

  loginMe=()=>{
    var loginVo = new FormData()
    loginVo.append('password',this.state.password)
    loginVo.append('sub_tenant_id', 'demo')
    loginVo.append('username', this.state.userName)
    LoginServiceApi.login(loginVo)
    .then(result=>{
        
        if(result){
            alert('Login Successfully')
        }
        else{
            alert('Please enter correct username and password')
        }
   
        console.log('resultresult',result)
    })
 
  }

  handleInputChange=(event)=> {
    const target = event.target;
    const value =  target.value;
    const name = target.name;
    this.setState({
      [name]: value
    }, ()=>{
    });
  }
  render(){
    return(
        <div class="row">

        <div class="col-sm-5">
          <img src={Image} style={{ height: "590px", width: "480px" }} />
        </div>

        <div class="col-sm-3">
          <h2 className="login">Log In</h2>
          <p className="email-p">Enter your email & Password.If you don't have an account please see your email invitation</p>
          <form className="row">
            <div className="form-group">
              <label className="label">EMAIL</label>
              <input type="text" className="input-type" placeholder="enter email"  onChange={this.handleInputChange} name="userName" defaultValue={this.state.userName} />
            </div>
            <div className="form-group">
              <label className="label">PASSWORD</label>
              <input type="password" className="input-type" placeholder="enter password" onChange={this.handleInputChange} name="password" defaultValue={this.state.password} />
            </div>
           
          </form>
        
          <div className="form-group">
              <input type="button"  className="login-button" value="Login" onClick={this.loginMe}/>
            </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
    console.log('statestate',state)
    return {
      firstName: 'jj'
    }
  }
const mapDispachToProps = dispatch => {
    return {
      DataFileGetVoDispatch: d => dispatch(getDataFile(d))
    }
  }
  export default connect(
    mapStateToProps,
    mapDispachToProps
  )(Login)

