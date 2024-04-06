export interface IService {
    name: string;
    category: string;
    description: string;
    type: "income" | "expenses";
    amount: number;
}

