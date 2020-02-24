export interface Task {
    id: number;
    name: string;
    createDate: Date;
    status: boolean;
    endDate?: Date;
    creator?: string;
}
