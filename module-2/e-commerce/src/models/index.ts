export interface ISession {
    token: string
}

export interface ICategory {
    id: number,
    name: string,
    status: string
}

export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    role: string,
    status: string
}

export interface IProduct {
    id: number,
    title: string,
    description: string,
    category: ICategory,
    price: string,
    status: string,
    user: IUser,
    productImgs: string[]
}

export type TProducts = IProduct[];

export interface IResponse {
    status: string,
    data: {
        products?: TProducts,
        product?: IProduct
    }
}