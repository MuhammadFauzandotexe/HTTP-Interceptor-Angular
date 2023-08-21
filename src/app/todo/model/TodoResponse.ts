import {Todo} from "./Todo";

export interface TodoResponse{
    data:Todo[],
    totalElement: number,
    totalPages: number,
    page: number,
    size: number
}
