import { FC } from 'react';
import { Menu } from '@mui/icons-material/';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useAppSelector } from '../hooks';
import { IStyles } from '../theme';
import { DRAWER_WIDTH } from '../constants';

const styles: IStyles = {
    appbar: {
        width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { md: `${DRAWER_WIDTH}px` },
        backgroundColor: 'white',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.10)'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        display: { xs: 'block', md: 'none' }
    }
}



interface Props {
    handleDrawerToggle: () => void;
}

export const AppNavBar: FC<Props> = ({ handleDrawerToggle }) => {

    const { name } = useAppSelector(state => state.auth);

    return (
        <AppBar position="fixed" elevation={0} sx={styles.appbar}>
            <Toolbar sx={styles.toolbar}>
                <Typography variant='h6' noWrap component='div' color='black' >
                    {name} - uid
                </Typography>
                <IconButton sx={styles.icon} onClick={handleDrawerToggle} color="inherit">
                    <Menu color='primary' />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}



