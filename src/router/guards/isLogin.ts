import { user } from "../../services/user";

export const isLogin = (to: any, from: any) => {

    if(user.value) {
        return true;
    }
    return { path: '/login' };
}