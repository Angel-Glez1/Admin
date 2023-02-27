import { Roles } from './roles';
import { StatusAuth } from './statusAuth';


export interface User {
    name: string;
    email: string;
    token?: string;
    statusAuth: StatusAuth;
    rol: Roles;
}