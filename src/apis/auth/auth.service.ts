import axiosConfig from '@/common/configs/axios.config';
import { HttpService } from '@/common/services/http.service';
import { type ILogin, type ISignUp } from '@/apis/auth/types/auth.type';

class AuthService extends HttpService {
    constructor() {
        super(axiosConfig);
    }

    async login(payload: ILogin) {
        return await this.post<ILogin>('auth/login', payload);
    }

    async signUp(payload: ISignUp) {
        return await this.post<ISignUp>('auth/sign-up', payload);
    }
}

const authService = new AuthService();
export { authService, AuthService };
