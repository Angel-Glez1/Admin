import { createSlice } from "@reduxjs/toolkit";
import { Roles, User, StatusAuth } from "../../models";



const EmptyStateAuth: User = {
    name: "",
    email: "",
    statusAuth: StatusAuth.NOT_AUTHENTICATED,
    rol: Roles.USER,
    token: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: EmptyStateAuth,
    reducers: {
        onCheckingAuth : (state) => {
            state.statusAuth = StatusAuth.CHECKING;
        },
        onLogin: (state, actions) => {
            state.name = 'Angel Armando';
            state.email = 'angel.alcaraz@code-glez.com';
            state.rol = Roles.ADMIN;
            state.statusAuth = StatusAuth.AUTHENTICATED;
            state.token = actions.payload.token;
        },
        onLogout: () => EmptyStateAuth,
    }
});

export const {
    onLogin,
    onLogout,
    onCheckingAuth,
} = authSlice.actions

