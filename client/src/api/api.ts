import axiosInstance from 'src/axios'

const sendSignature = (signature: any) => {
  return axiosInstance.post('/mint/signature', signature)
}

const Api = {
  sendSignature
}

export default Api
