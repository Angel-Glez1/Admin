import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useAppDispatch, useForm } from '../../hooks';
import { startLoginWithEmailPasword } from '../../redux/actions';
import { AppButton } from '../../styled-componets';
import { IStyles } from '../../theme';


const initialState = {
    email: '',
    password: '',
}

const Login = () => {


    const dispatch = useAppDispatch();
    const { onHandleChange, email, password } = useForm(initialState);

    const handleClick = () => {
        if ([email, password].includes('')) return;
        dispatch(startLoginWithEmailPasword(email, password));
    };

    return (
        <Box sx={styles.container}>
            <Grid container sx={styles.cardLogin} className='shadow'>

                <Grid item xs={12} my='20px' >
                    <Typography textAlign='center' color='primary' variant='h5' textTransform='uppercase' fontWeight='bold' >
                        Login
                    </Typography>
                </Grid>

                <Grid item xs={12} my='20px' >
                    <Typography textAlign='center'>
                        Please fill out the information below to get started
                    </Typography>
                </Grid>

                <Grid item xs={10} sm={8} my='20px' >
                    <TextField
                        autoComplete='off'
                        color='secondary'
                        type='email'
                        label='Email'
                        variant='standard'
                        focused
                        name='email'
                        value={email}
                        onChange={onHandleChange}
                    />
                </Grid>

                <Grid item xs={10} sm={8} my='20px' >
                    <TextField
                        color='secondary'
                        type='password'
                        label='Password'
                        variant='standard'
                        focused
                        name='password'
                        value={password}
                        onChange={onHandleChange}
                    />
                </Grid>

                <Grid item xs={10} sm={8} my='20px' >
                    <AppButton disabled={[email, password].includes('')} sx={styles.buttonLogin} onClick={handleClick}>
                        Iniciar
                    </AppButton>
                </Grid>

            </Grid>
        </Box>
    )
}

const styles: IStyles = {
    container: {
        display: 'flex',
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: { xs: 'url(/bgMobiel.svg)', sm: 'url(/bgDesk.svg)' },
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
        padding: '60px 25px',
        borderRadius: '10px',
        width: { xs: '90%', sm: '70%', md: '500px' }
    },
    buttonLogin: {
        width: '100%',
    }

}


export default Login;