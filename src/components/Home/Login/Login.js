import React, { useContext } from 'react';
import './Login.css';
import logo from '../../../creative-agency-main/images/logos/logo.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';

firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signInUser = { name: displayName, email: email };
            setLoggedInUser(signInUser)
            history.replace(from);
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
    return (
        <div className="container">
            <div style={{ textAlign: 'center' }}>
                <div className="col-sm-12">
                    <img style={{ width: '100ps', height: '100px' }} src={logo} alt="" />
                    <div className="login-page">

                        <button className="btn btn-dark" onClick={handleGoogleSignIn}>google sign in</button>
                        <p>do not have account? <Link to="/"> login here</Link></p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;