import { user } from "../../services/user";

export const isNotLogin = (to: any, from: any) => {

    if(user.value) {
        return true;
    }
    
    return { path: '/login' };
}