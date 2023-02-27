import { FC } from 'react';
import { NoteAltOutlined, CalendarMonthOutlined, EuroOutlined } from '@mui/icons-material';
import { Box, Drawer, DrawerProps, ListItem, Typography } from '@mui/material';
import { DashboardRoutes } from '../constants';
import { IStyles } from '../theme';
import { AppSideBarItem } from './AppSideBarItem';


const items = [
    { text: 'Notes', Icon: NoteAltOutlined, link: DashboardRoutes.NOTES },
    { text: 'Finances', Icon: EuroOutlined, link: DashboardRoutes.FINANCES },
    { text: 'Calendar', Icon: CalendarMonthOutlined, link: DashboardRoutes.CALENDAR },
]


const styles: IStyles = {
    logo: {
        my: '0.9rem',
        display: 'flex',
        justifyContent: 'center'
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
    },
}


interface Props extends DrawerProps { }


export const AppSideBar: FC<Props> = (props) => {
    return (
        <Drawer {...props}>

            <ListItem sx={styles.logo}>
                <Typography color='primary' variant='h6' textAlign='center' fontWeight='bold'  >
                    <span style={{ color: 'black' }} >&#123;</span>
                    AAGA
                    <span style={{ color: 'black' }} >&#125;</span>
                </Typography>
            </ListItem>

            <Box sx={styles.list}>
                {items.map(item => <AppSideBarItem key={item.text} {...item} />)}
            </Box>

        </Drawer>
    );
}
