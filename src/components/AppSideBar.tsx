import { Drawer, DrawerProps } from '@mui/material';
import { FC } from 'react';


interface Props extends DrawerProps { }


export const AppSideBar: FC<Props> = (props) => {
    return (
        <Drawer {...props}>
            <h1>Hola Mundo :D!!! </h1>
        </Drawer>
    );
}