import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from '../../redux';

const UsersContainerHooks = () => {
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => dispatch(fetchUsersSuccess(res.data)))
            .catch(error => dispatch(fetchUsersFailure(error.message)));
    }, []);


    return <div>
        <h1>Users </h1>
        <ul style={{ listStyle: "none" }}>
            {
                users.map(user => <li key={user.id}>{user.name}</li>)
            }
        </ul>
    </div>
}




export default UsersContainerHooks;