import { useState, useEffect } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import { useLoginMutation } from '../../api/userApiSlice';
import { setCredentials } from '../../api/authSlice';
import { toast } from 'react-toastify'
import image from '../../assets/image/login-img.jpg'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth.user);

  // const { search } = useLocation();
  // const sp = new URLSearchParams(search);
  // const redirect = sp.get('redirect') || '/';

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate(redirect);
  //   }
  // }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      console.log(res);
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div>
      <section id='login-section' className='d-flex flex-wrap'>
        <div id='login-container'>
          <h1>Sign In</h1>

          <form onSubmit={submitHandler} className='login-form container'>
            <div className='input-container'>
              <label htmlFor='email'>Email Address</label>
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

            <div className='d-flex align-items-center'>
              <button
                disabled={isLoading}
                type='submit'
                id='submit-btn'
                className='rounded me-3'
              >
                {isLoading ? 'Sign In...' : 'Sign In'}
              </button>

              {isLoading && <Loader />}
            </div>
          </form>

          <div className='mt-4'>
            <p className='text-dark fw-normal'>
              New Customer?{' '}
              <Link
                // to={redirect ? `/register?redirect=${redirect}` : '/register'}
                to={'/register'}
                className=''
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;