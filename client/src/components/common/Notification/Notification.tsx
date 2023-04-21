import cn from 'classnames'
import './Notification.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

type Props = {
  type: 'error' | 'warning | success'
  text: string
  hideDelay?: number
  autoHide?: boolean
}

const Notification = ({
  type,
  text,
  hideDelay = 3000,
  autoHide = true
}: Props) => {
  return (
    <div className={cn('Notification', type)}>
      <FontAwesomeIcon icon={faXmark} />
      <p>X</p>
    </div>
  )
}

export default Notification
