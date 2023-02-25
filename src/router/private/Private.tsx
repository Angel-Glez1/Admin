import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from '../../models';


const Dashboard = lazy(() => import('../../pages/Dashboard/Dashboard'));
const Sandbox = lazy(() => import('../../pages/Sandbox/Sandbox'));


const Private = () => {
    return (
        <Routes>
            <Route path={`${PrivateRoutes.DASHBOARD}/*`} element={<Dashboard />} />
            <Route path={`${PrivateRoutes.SANBOX}/*`} element={<Sandbox />} />

            <Route path="/*" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
        </Routes>
    )
}
export default Private