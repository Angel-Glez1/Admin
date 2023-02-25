import { Button } from '@mui/material'
import { useAppDispatch } from '../../hooks';
import { startLoginWithEmailPasword } from '../../redux/actions';



const Login = () => {

    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(startLoginWithEmailPasword())
    }

    return (
        <Button onClick={onClick} >Login</Button>
    )
}
export default Login