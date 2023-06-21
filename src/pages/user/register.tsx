import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './login.css';
import { actionUser } from '../../redux/sagas/sagaActions';
import { useAppDispatch } from '../../hooks/hook';
import { useForm } from 'react-hook-form';

const AddUser: React.FC = () => {
  const dispatch = useAppDispatch();

  const formSchema = Yup.object().shape({
    userName: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(4),
  });

  const validationOpt = { resolver: yupResolver(formSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(validationOpt);

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
          {...register("userName")}
          placeholder="name.."
          className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.userName?.message}</div>

        <input
          {...register("email")}
          placeholder="email..."
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.email?.message}</div>

        <input
          {...register("password")}
          placeholder="password..."
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.password?.message}</div>

        <button className="submit">Submit</button>
      </form>
    </>
  );
};

export default AddUser;
