export enum ScreenPath {
  DASHBOARD = '/dashboard',
  CATEGORIES = '/categories',
  ADD_CATEGORIES = '/categories/create',
  PRODUCTS = '/products',
  ORDERS = '/orders'
}

export enum ProductStatus {
  ACTIVE = 'ACTIVE',
  OUT_OF_STOCK = 'OUT_OF_STOCK',
  INACTIVE = 'INACTIVE',
  DELETED = 'DELETED'
}

export enum OrderStatus {
  DELETED = 'DELETED',
  CANCELED = 'CANCELED',
  COMPLETED = 'COMPLETED',
  DELIVERING = 'DELIVERING',
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED'
}

export enum TransactionStatus {
  DRAFT = 'DRAFT',
  CAPTURED = 'CAPTURED',
  ERROR = 'ERROR',
  CANCELED = 'CANCELED',
  DELETED = 'DELETED'
}
