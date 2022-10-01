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

const pic = { id: 19, cartId: 11, productId: 1, quantity: 3, status: 'active' };

export interface ICartProduct {
    id: number,
    brand: string,
    categoryId: number,
    description: number,
    price: string,
    productsInCart: typeof pic,
    quantity: number,
    status: string,
    title: string,
    userId: number
}

export type TProducts = IProduct[];

export interface IResponse {
    status: string,
    data: {
        products?: TProducts,
        product?: IProduct,
        user?: IUser,
        cart?: ICart,
        purchases?: IPurchase[],
        token?: string
    }
}

export interface IFilter {
    category: number,
    name: string
}


export interface ICart {
    id: number,
    products: ICartProduct[],
    status?: string
}

export interface IPurchase {
    id: number,
    userId: number,
    cartId: number,
    createdAt: string,
    updatedAt: string,
    cart: ICart
}
