import axiosInstance from '@utils/axios'

const sendSignature = ({ signature, signerAddress }: any) => {
  return axiosInstance.post('/mint/signature', { signature, signerAddress })
}

const Api = {
  sendSignature
}

export default Api
