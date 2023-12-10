export interface IUser{
    id: number;
    name: string;
    email: string;
    mobile: string;
    address: string | null;
    city: string | null;
    image: string | null;
    role_id: number;
    password: string;
    created_at: string;
    updated_at: string;
}