export enum ScreenPath {
  DASHBOARD = '/dashboard',
  CATEGORIES = '/categories',
  ADD_CATEGORIES = '/categories/create',
  PRODUCTS = '/products',
  ORDERS = '/orders'
}

export enum ProductStatus {
  ACTIVE = 'ACTIVE',
  OUT_OF_STOCK = 'OUT_OF_STOCK'
}

export enum OrderStatus {
  PROCESSING = 'PROCESSING',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
  DELIVERING = 'DELIVERING'
}
