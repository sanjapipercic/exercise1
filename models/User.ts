export interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    address: AdditionalData;
}
export interface AdditionalData{
    street: string;
    suite: string;
    city: string;
    zipcode: any;
}