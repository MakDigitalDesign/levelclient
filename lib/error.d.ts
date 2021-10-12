import { AxiosResponse } from 'axios';
interface ClientErrorInput {
    msg: string;
    data?: any;
    res: AxiosResponse;
}
export declare class ClientError extends Error {
    data: any;
    res: AxiosResponse;
    constructor({ msg, data, res }: ClientErrorInput);
}
export {};
