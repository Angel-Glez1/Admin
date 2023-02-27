import { FC, useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import { IStyles } from '../../../theme/theme';
import { HOC } from '../../../interfaces';
import { AppSideBar, AppNavBar } from '../../../components';
import { DRAWER_WIDTH } from '../../../constants';

const styles: IStyles = {
    sidebarDesktop: {
        display: { xs: 'none', md: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
    },
    sidebarMobiel: {
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
    },
    sidebarContainer: {
        width: { md: DRAWER_WIDTH },
        flexShrink: { md: 0 }
    },
    main: {
        p: 3,
        flexGrow: 1,
        backgroundColor: '#F2F2F8',
        minHeight: '100vh'
    },
}


interface Props extends HOC { }

export const DashLayout: FC<Props> = ({ children }) => {

    const [isVisibleDrawer, setIsVisibleDrawer] = useState(false);

    const handleDrawerToggle = () => setIsVisibleDrawer(prev => !prev);

    return (
        <Box sx={{ display: 'flex' }}>

            <AppNavBar handleDrawerToggle={handleDrawerToggle} />

            <Box component='nav' sx={styles.sidebarContainer}>
                <AppSideBar
                    variant='permanent'
                    sx={styles.sidebarDesktop}
                />
                <AppSideBar
                    onClose={handleDrawerToggle}
                    open={isVisibleDrawer}
                    sx={styles.sidebarMobiel}
                    variant='temporary'
                />
            </Box>

            <Box component="main" sx={styles.main}>
                <Toolbar />
                {children}
            </Box>

        </Box>
    )
}

