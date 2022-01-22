import React, { Component } from "react";
import './sign-in.styles.scss';
import FormInput from "../input-form/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})

    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="text"
                        handleChange={this.handleChange} 
                        value={this.state.email}
                        label="email"
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="password" 
                        required 
                    />

                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle}> {' '} Sign In with Google {' '} </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;