export interface ILogin {
    username: string;
    password: string;
}
export interface ISignUp extends ILogin {
    name: string;
    date_of_birth: number;
    avatar: string;
}

export interface IResponseLogin {
    data: {
        refreshToken: string;
        accessToken: string;
    };
}

export interface IResponseSignUp {
    data: any;
}

export interface IResponseRefreshToken {
    data: {
        refreshToken: string;
        accessToken: string;
        payload?: any;
    };
}
