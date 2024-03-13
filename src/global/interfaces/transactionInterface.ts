export interface ITransaction {
  _id: string
  transactionStatus: string
  transaction: {
    partnerCode: string
    orderId: string
    requestId: string
    amount: number
    orderInfo: string
    orderType: string
    transId: number
    resultCode: number
    message: string
    payType: string
    responseTime: number
    extraData: string
    signature: string
  }
  paymentMethod: string
  amount: number
  createdAt: string
  updatedAt: string
}
