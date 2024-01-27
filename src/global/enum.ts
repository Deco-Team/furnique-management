export enum ScreenPath {
  DASHBOARD = '/dashboard',
  CATEGORIES = '/categories',
  PRODUCTS = '/products',
  ORDERS = '/orders'
}

export enum ProductStatus {
  OUT_OF_STOCK = 'OUT_OF_STOCK',
  PUBLISHED = 'PUBLISHED',
  DRAFT = 'DRAFT'
}

export enum OrderStatus {
  PROCESSING = 'PROCESSING',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
  DELIVERING = 'DELIVERING'
}
