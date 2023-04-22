import { useCallback } from 'react'
import { toast } from 'react-toastify'

const useNotification = () => {
  const generateErrorMessage = useCallback((message: string) => {
    return toast.error(message)
  }, [])

  const generateWarningMessage = useCallback((message: string) => {
    return toast.warn(message)
  }, [])

  const generateSuccessMessage = useCallback((message: string) => {
    return toast.success(message)
  }, [])

  const generateInfoMessage = useCallback((message: string) => {
    return toast.info(message)
  }, [])

  return {
    generateErrorMessage,
    generateWarningMessage,
    generateSuccessMessage,
    generateInfoMessage
  }
}

export default useNotification
