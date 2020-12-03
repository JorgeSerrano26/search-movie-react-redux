import react, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../redux';

const Start = ({ children }) => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('render');
        onLoad();
    }, []);

    const onLoad = async () => {
        dispatch(loginRequest());
        setTimeout( () => {
            dispatch(loginSuccess({
                name: "jorge",
                rol: "ADMINISTRADOR"
            }));
        }, 5000)
    }

    return user.isAuthenticating
    ? <p>Loggin...</p>
    : children
}

export default Start;