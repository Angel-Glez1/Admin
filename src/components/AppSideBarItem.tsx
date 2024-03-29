import { FC } from 'react';
import { SvgIconTypeMap, Typography, Box, Grid, Color } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const styles = {
    listItem: {
        py: '1rem',
        transition: 'background-color 300ms easy',
        ':hover': {
            cursor: 'pointer',
            backgroundColor: 'rgba(0, 120, 240, 0.07)',
        }
    }
}

interface PropsItem {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    text: string;
    link: string;
    onClick?: () => void;
    color?: 'inherit' | 'error';
}


export const AppSideBarItem: FC<PropsItem> = ({ Icon, text, link, onClick, color = 'inherit' }) => {

    const natigate = useNavigate();
    const { pathname } = useLocation();


    const onNavigate = () => {
        natigate(link);
    }

    return (
        <Grid
            container
            onClick={onClick ? onClick : onNavigate}
            sx={{
                ...styles.listItem,
                backgroundColor: pathname.includes(link) ? 'rgba(0, 120, 240, 0.07)' : 'white'
            }}
        >
            <Box display='flex' marginLeft='3.5rem'  >
                <Icon color={color} />
                <Typography ml='1rem' color={color} >{text}</Typography>
            </Box>
        </Grid>
    )
}


