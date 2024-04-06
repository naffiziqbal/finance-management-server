export interface IService {
    name: string;
    category: string;
    description: string;
    type: "income" | "expense";
    amount: number;
}

