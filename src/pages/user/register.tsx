import React from 'react';
import './login.css';
import { actionUser } from '../../redux/sagas/sagaActions';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { useForm } from 'react-hook-form';
import { RootState } from '../../redux/configureStore';

const AddUser: React.FC = () => {
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector((state: RootState) => state.user.error);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit((data: any) => {
          console.log(data);
          dispatch({ type: actionUser.ADD_USER, data });
          reset();
        })}
      >
        <h1>Create Account</h1>

        <input
          {...register('userName')}
          placeholder="name.."
          className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{String(errors.userName?.message)}</div>

        <input
          {...register('email')}
          placeholder="email..."
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{String(errors.email?.message)}</div>

        <input
          {...register('password')}
          placeholder="password..."
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{String(errors.password?.message)}</div>
        {errorMessage && <div className="backend-error">{errorMessage}</div>}
        <button className="submit">Submit</button>

    
      </form>
    </>
  );
};

export default AddUser;

