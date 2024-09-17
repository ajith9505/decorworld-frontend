import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './UpdateProfile.css'
import { useUpdateProfileMutation } from '../../api/userApiSlice';
import Loader from '../../components/Loader';
import { setCredentials } from '../../api/authSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const UpdateProfile = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { user } = useSelector((state) => state.auth);

    const [updateProfile, { isLoading: loadingUpdateProfile }] = useUpdateProfileMutation();

    const dispatch = useDispatch();

    useEffect(() => {
        setUserName(user.username);
        setEmail(user.email);
    }, [user.email, user.username]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
        } else {
            try {
                const res = await updateProfile({
                    _id: user._id,
                    username,
                    email,
                    password,
                }).unwrap();
                dispatch(setCredentials({ ...res }));
                toast.success('Profile updated successfully');
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        }
    };


    return (
        <div id='update-profile-section' className='container'>
            <div id='update-profile-container' className="d-flex justify-content-center align-items-center">
                <div id="content">
                    <h2>Update Profile</h2>
                    <form onSubmit={submitHandler} id="profile-update-form">

                        <div className='input-container'>
                            <label className='d-block mb-2'>username</label>
                            <input
                                type="text"
                                placeholder="Enter name"
                                className="form-control p-3 rounded w-100 mb-4"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>

                        <div className='input-container'>
                            <label className='d-block mb-2'>email</label>
                            <input
                                type="text"
                                placeholder="Enter name"
                                className="form-control p-3 rounded w-100 mb-4"
                                value={email}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>

                        <div className='input-container'>
                            <label className='d-block mb-2'>password</label>
                            <input
                                type="text"
                                placeholder="Enter name"
                                className="form-control p-3 rounded w-100 mb-4"
                                value={password}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>

                        <div className='input-container'>
                            <label className='d-block mb-2'>confirm password</label>
                            <input
                                type="text"
                                placeholder="Enter name"
                                className="form-control p-3 rounded w-100 mb-4"
                                value={confirmPassword}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>

                        <div className="d-flex justify-content-between">
                            <button
                                id='submit-btn'
                                type="submit"
                                className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
                            >
                                Update
                            </button>

                            <Link to="/user-orders">My Orders</Link>
                        </div>
                        {loadingUpdateProfile && <Loader />}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile