import { Users } from '../interfaces/interface-users';

export interface ElList {
    id: number;
    name: string;
    createDate: Date;
    status: boolean;
    endDate?: Date;
    creator?: Users;
}
