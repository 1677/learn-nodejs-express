
interface PureUser {
    id?: number;
    username: string;
    age: number;
    nickname: string;
    email: string;
}

interface User extends PureUser {
    password: string;
}