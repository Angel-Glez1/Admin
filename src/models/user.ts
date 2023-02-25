import { Roles } from './roles';


export enum StatusAuth {
    AUTHENTICATED = 'authenticated',
    NOT_AUTHENTICATED = 'not-authenticated',
    CHECKING = 'checking',
}


export interface User {
    name: string;
    email: string;
    token?: string;
    statusAuth: StatusAuth;
    rol: Roles;
}