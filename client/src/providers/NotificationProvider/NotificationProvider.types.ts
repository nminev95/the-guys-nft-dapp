import { AlertColor } from '@mui/material/Alert'

export enum NotificationType {
  INFO = 'info',
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success'
}

export type Props = {
  children: React.ReactNode
}

export type NotificationState = {
  text: string
  type: AlertColor | undefined
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
