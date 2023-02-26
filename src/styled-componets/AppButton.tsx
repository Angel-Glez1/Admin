import { Button } from '@mui/material';
import styled from '@emotion/styled';


export const AppButton = styled(Button)`
    background-color: rgba(0, 120, 240, 0.15);
    border: 1px solid #0078F0;
    border-radius: 10px;
    padding: 0.5rem 2rem;   
    font-weight: 600;
    transition: all 500ms ease;
    
    :hover{
        cursor: pointer;
        background-color: rgba(0, 120, 240, 0.13);
    }

    :disabled{
        background-color: rgba(0, 0, 0, .1);
        border-color: rgba(0, 0, 0, .1);
    }
`