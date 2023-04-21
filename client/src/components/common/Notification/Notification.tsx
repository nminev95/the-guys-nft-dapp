import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXmark,
  faCircleExclamation,
  faCircleCheck,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import { NotificationState } from '@providers/NotificationProvider/NotificationProvider.types'
import './Notification.scss'
import { useEffect } from 'react'

type Props = NotificationState

const NOTIFICATION_ICONS = {
  error: faCircleXmark,
  warning: faCircleExclamation,
  success: faCircleCheck
}

const Notification = ({
  type,
  text,
  isVisible,
  hideDelay = 3000,
  autoHide = true,
  hideNotification
}: Props) => {
  return (
    <div className={cn(`Notification ${type}`, { visible: isVisible })}>
      <div className="backdrop">
        <FontAwesomeIcon icon={faXmark} onClick={hideNotification} />
      </div>
      <div className="notification-body">
        <div className="notification-icon">
          {type && <FontAwesomeIcon icon={NOTIFICATION_ICONS[type]} />}
        </div>
        <div className="notification-content">
          <p className="title">{type}</p>
          <p className="text">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Notification
