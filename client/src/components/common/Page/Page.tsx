import { ReactNode } from 'react'

import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import Notification from '@components/common/Notification/Notification'
import { useNotification } from '@providers/NotificationProvider/NotificationProvider'

type Props = {
  header?: boolean
  footer?: boolean
  className: string
  children: ReactNode
}

const Page = ({ header = true, footer = true, className, children }: Props) => {
  const { notificationState } = useNotification()

  return (
    <>
      {header && <Header />}
      <div className={className}>{children}</div>
      <Notification {{...notificationState}} />
      {footer && <Footer />}
    </>
  )
}

export default Page
