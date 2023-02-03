export interface order {
    id: number,
    companyId: number,
    created: string,
    createdBy: string,
    paymentMethod: string,
    totalPrice: number,
    status: 0,
    orderRows: [
        {
            productId: number,
            product: null,
            amount: number
        }
    ]
}