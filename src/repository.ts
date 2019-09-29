import { ReturnType } from "./domain";

export function NewRepository(): ReturnType {
    const newReturnType: ReturnType = {
        statusCode: 200,
        body: JSON.stringify({message: "hello"})
    };
    return newReturnType
}