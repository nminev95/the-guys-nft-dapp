import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import { ReactNode } from 'react'

type Props = {
  header?: boolean
  footer?: boolean
  className: string
  children: ReactNode
}

const Page = ({ header, footer, className, children }: Props) => {
  return (
    <>
      {header && <Header />}
      <div className={className}>{children}</div>
      {footer && <Footer />}
    </>
  )
}

export default Page
