export enum UserRole {
  ADMIN      = 'ADMIN',
  CARDHOLDER = 'CARDHOLDER',
}

export enum CardStatus {
  ACTIVE    = 'ACTIVE',
  BLOCKED   = 'BLOCKED',
  CANCELLED = 'CANCELLED',
  EXPIRED   = 'EXPIRED',
}

export enum CardType {
  PHYSICAL = 'PHYSICAL',
  VIRTUAL  = 'VIRTUAL',
}

export enum InvoiceStatus {
  OPEN    = 'OPEN',
  CLOSED  = 'CLOSED',
  OVERDUE = 'OVERDUE',
  PAID    = 'PAID',
}

export enum DisputeStatus {
  OPEN         = 'OPEN',
  UNDER_REVIEW = 'UNDER_REVIEW',
  APPROVED     = 'APPROVED',
  REJECTED     = 'REJECTED',
}

export enum DisputeReason {
  NOT_RECOGNIZED       = 'NOT_RECOGNIZED',
  DUPLICATE            = 'DUPLICATE',
  WRONG_AMOUNT         = 'WRONG_AMOUNT',
  SERVICE_NOT_PROVIDED = 'SERVICE_NOT_PROVIDED',
}