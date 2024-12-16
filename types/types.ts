export interface UserLogin {
    email: string,
    password: string,
};

export interface UserSignUp extends UserLogin {
    username: string,
}