import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from '../../redux';

const UsersContainer = (props) => {
    useEffect(() => {
        console.log(props)
        props.fetchUsersRequest();
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => props.fetchUsersSuccess(res.data))
            .catch(error => props.fetchUsersFailure(error.message));
    }, []);


    return <div>
        <h1>Users </h1>
        <ul style={{listStyle: "none"}}>
            {
                props.users.map(user => <li key={user.id    }>{user.name}</li>)
            }
        </ul>
    </div>
}

const mapStateToProps = state => {
    return {
        users: state.users.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsersRequest: () => dispatch(fetchUsersRequest()),
        fetchUsersSuccess: (users) => dispatch(fetchUsersSuccess(users)),
        fetchUsersFailure: (error) => dispatch(fetchUsersFailure(error))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersContainer);