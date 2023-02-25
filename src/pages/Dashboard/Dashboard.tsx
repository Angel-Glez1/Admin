import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardRoutes } from '../../models';


const Calendar = lazy(() => import('./Calendar/Calendar'));
const Finances = lazy(() => import('./Finances/Finances'));
const Notes    = lazy(() => import('./Notes/Notes'));


const Dashboard = () => {
    return (
        <Routes>
            <Route path={`${DashboardRoutes.CALENDAR}`} element={<Calendar />} />
            <Route path={`${DashboardRoutes.FINANCES}`} element={<Finances />} />
            <Route path={`${DashboardRoutes.NOTES}`} element={<Notes />} />
            <Route path='/*' element={<Navigate to={`${DashboardRoutes.NOTES}`} />} />
        </Routes>
    )
}
export default Dashboard