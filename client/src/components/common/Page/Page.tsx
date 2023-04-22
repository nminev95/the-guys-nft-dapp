import { ReactNode } from 'react'

import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
type Props = {
  header?: boolean
  footer?: boolean
  className: string
  children: ReactNode
}

const Page = ({ header = true, footer = true, className, children }: Props) => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />
      {header && <Header />}
      <div className={className}>{children}</div>

      {footer && <Footer />}
    </>
  )
}

export default Page
