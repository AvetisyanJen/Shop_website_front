import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { actionUser } from '../../redux/sagas/sagaActions';
import AddUser from './register';
import { RootState } from '../../redux/configureStore';

import './Login.css';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [addclass, setaddclass] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const errorMessage = useAppSelector((state: RootState) => state.user.error); // Get error message from Redux store

  useEffect(() => {
    // Reset error message when component unmounts
    return () => {
      dispatch({ type: actionUser.ADD_USER_FAILURE, payload: null });
    };
  }, [dispatch]);

  return (
    <>
      <div className="main-div">
        <div className="sign-div">
          <div>
            <div className={`container ${addclass}`} id="container">
              <div className="form-container sign-up-container">
                <AddUser />
              </div>
              <div className="form-container sign-in-container">
                <form
                  onSubmit={handleSubmit((data) => {
                    console.log(data);
                    dispatch({ type: actionUser.LOGIN_USER, data, navigate: navigate });
                    reset();
                   
                  })}
                >
                  <h1 className="signh1">Login</h1>
                  <input {...register('email')} placeholder="email" />
                  <input {...register('password')} placeholder="password" />
                  {errorMessage && <div className="backend-error">{errorMessage}</div>} {/* Display the errorMessage */}
                  <button className="submit">Submit</button>
                  
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <button
                      className="ghost"
                      id="signIn"
                      onClick={() => setaddclass('')}
                    >
                      GO TO LOGIN
                    </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <button
                      className="ghost"
                      id="signUp"
                      onClick={() => setaddclass('right-panel-active')}
                    >
                      GO TO REGISTER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
