import React from 'react'

import './sign-in.scss';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.setState({email:'',password:''});
    }

    handleChange = e => {
        let {name,value} = e.target;
        this.setState({name:value});
    }

    render(){
       return(
           <div className="sign-in">
               <h2>I already have a account</h2>
               <span>Sign in with your email and password</span>

           <form onSubmit={this.handleSubmit}>
               <FormInput name="email" label="email" type="email" handleChange={this.handleChange} value={this.state.email} required/>
               <FormInput name="password" label="password" type="password" handleChange={this.handleChange} value={this.state.email} required/>

                <div className="button">
               <CustomButton type="submit">Sign In </CustomButton>
               <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In with google </CustomButton>
                </div>
           </form>
           </div>
       ) 
    }
}

export default SignIn;