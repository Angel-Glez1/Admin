import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { FallBack } from '../components';
import { PublicRoutes } from '../constants';
import { useAppDispatch, useAppSelector } from '../hooks';
import { StatusAuth } from '../models';
import { startCheckAuth } from '../redux/actions';

const Login = lazy(() => import('../pages/Login/Login'));
const Private = lazy(() => import('./private/Private'));


export const AppRouter = () => {

    const { statusAuth } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(startCheckAuth())
    }, [])


    return statusAuth === StatusAuth.CHECKING ? <FallBack /> : (
        <Routes>
            {
                statusAuth === StatusAuth.NOT_AUTHENTICATED
                    ? <Route path={`/${PublicRoutes.LOGIN}`} element={<Login />} />
                    : <Route path='/*' element={<Private />} />
            }

            <Route path='/*' element={<Navigate to={`/${PublicRoutes.LOGIN}`} />} />
            {/* <Route path='terminos-y-condiciones' element={<h2>Terminos Y Condiciones</h2>} /> */}
        </Routes>

    )
}