import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import { useRegisterMutation } from '../../api/userApiSlice';
// import { setCredentials } from '../../api/authSlice';
import { toast } from 'react-toastify';
import './Register.css'

const Register = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await register({ username, email, password }).unwrap();
        // dispatch(setCredentials({ ...res }));
        // navigate(redirect);
        toast.success('User successfully registered');
      } catch (err) {
        console.log(err);
        toast.error(err.data.message);
      }
    }
  };

  return (
    <section id='register-section' className='d-flex flex-wrap'>
      <div id='register-container'>
        <h1>Register</h1>
        <form onSubmit={submitHandler} className='login-form container'>
          <div className='input-container'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              placeholder='Enter name'
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='input-container'>
            <label htmlFor='email'> Email Address</label>
            <input
              type='email'
              id='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='input-container'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='input-container'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type='password'
              id='confirmPassword'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            disabled={isLoading}
            id='submit-btn'
            type='submit'
            className='rounded'
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>

          {isLoading && <Loader />}
        </form>

        <div className='mt-4'>
          <p className='text-dark'>
            Already have an account?{' '}
            <Link
              to={redirect ? `/login?redirect=${redirect}` : '/login'}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;