import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardRoutes } from '../../models';
import { DashLayout } from './layouts';


const Notes = lazy(() => import('./Notes/Notes'));
const Calendar = lazy(() => import('./Calendar/Calendar'));
const Finances = lazy(() => import('./Finances/Finances'));


const Dashboard = () => {
    return (
        <DashLayout>
            <Routes>
                <Route path={`${DashboardRoutes.CALENDAR}`} element={<Calendar />} />
                <Route path={`${DashboardRoutes.FINANCES}`} element={<Finances />} />
                <Route path={`${DashboardRoutes.NOTES}`} element={<Notes />} />
                <Route path='/*' element={<Navigate to={`${DashboardRoutes.NOTES}`} />} />
            </Routes>
        </DashLayout>
    )
}

export default Dashboard;