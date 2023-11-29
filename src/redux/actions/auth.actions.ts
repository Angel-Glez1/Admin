import { onCheckingAuth, onLogin, onLogout } from '../slices'
import { AppDispatch, GetState } from '../store'


export const startLoginWithEmailPasword = (email = '', password = '') => {
    return async (dispatch: AppDispatch, getState: GetState) => {

        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

        localStorage.setItem('token-admin', token);

        dispatch(onLogin({ token }));
    }
}


export const startCheckAuth = () => {
    return async (dispatch: AppDispatch, getState: GetState) => {
        dispatch(onCheckingAuth());

        const token = localStorage.getItem('token-admin');
        if (!token) return dispatch(onLogout());

        dispatch(onLogin({ token }));
    }
}


export const startLogout = () => {
    return async (dispatch: AppDispatch, getState: GetState) => {

        localStorage.removeItem('token-admin');
        dispatch(onLogout());
    }
}