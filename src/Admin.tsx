import { Suspense } from 'react';
import { AppRouter } from './router'
import { AppTheme } from './theme';
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