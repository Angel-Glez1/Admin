import { AppRouter } from './router'
import { AppTheme } from './theme';
import { Suspense } from 'react';
import { FallBack } from './components';



const Admin = () => {
    return (
        <AppTheme>
            <Suspense fallback={<FallBack />} >
                <AppRouter />
            </Suspense>
        </AppTheme>
    )
}
export default Admin