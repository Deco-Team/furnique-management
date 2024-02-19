export enum ScreenPath {
  DASHBOARD = '/dashboard',
  CATEGORIES = '/categories',
  ADD_CATEGORIES = '/categories/create',
  VIEW_CATEGORY = '/cateogies/detail/:categoryId',
  UPDATE_CATEGORY = '/categories/update/:categoryId',
  PRODUCTS = '/products',
  ADD_PRODUCTS = '/products/create',
  ORDERS = '/orders',
  VIEW_ORDER = '/orders/detail/:orderId',
  STAFFS = '/staffs',
  ADD_STAFF = '/staffs/create',
  VIEW_STAFF = '/staff/detail/:staffId',
  UPDATE_STAFF = 'staff/update/:staffId',
  UPDATE_PRODUCT = '/products/update/:productId',
  DELETE_PRODUCT = '/products/delete/:productId'
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

export enum StaffRoles {
  STAFF = 'STAFF',
  CONSULTANT_STAFF = 'CONSULTANT_STAFF',
  DELIVERY_STAFF = 'DELIVERY_STAFF'
}
