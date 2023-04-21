export enum NotificationType {
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success'
}

export type Props = {
  children: React.ReactNode
}

export type NotificationState = {
  text: string
  type: NotificationType
  isVisible: boolean
  hideDelay?: number
  autoHide?: boolean
  hideNotification: () => void
}

export type ProviderState = {
  notificationState: NotificationState
  showNotification: (notificationState: NotificationState) => void
  hideNotification: () => void
}
