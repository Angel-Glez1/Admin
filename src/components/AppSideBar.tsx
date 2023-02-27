import { FC } from 'react';
import { Drawer, DrawerProps, Box, ListItem, List, ListItemButton, ListItemIcon, ListItemText, Typography, Divider, Button, Grid } from '@mui/material';
import { NoteAltOutlined, Logout, Login } from '@mui/icons-material';
import { IStyles } from '../theme';



interface Props extends DrawerProps { }


const styles: IStyles = {
    logo: {
        my: '0.9rem',
        display: 'flex',
        justifyContent: 'center'
    },
    asideBarItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

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


            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >


                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }} >
                    <div>
                        <NoteAltOutlined />
                    </div>
                    <div>
                        <Typography ml='1rem' >Dashboard</Typography>
                    </div>
                </Box>


                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }} >
                <div>
                        <NoteAltOutlined />
                    </div>
                    <div>
                        <Typography ml='1rem' >Notas</Typography>
                    </div>
                </Box>


            </Box>

        </Drawer>
    );
}