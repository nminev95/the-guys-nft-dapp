import { useRef } from 'react'

const MetaMaskAvatar = () => {
  const avatarRef = useRef<HTMLDivElement>()

  // const { account } = useEthers()

  // useEffect(() => {
  //   if (account && ref.current) {
  //     ref.current.innerHTML = ''
  //     ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)))
  //   }
  // }, [account])

  // return <StyledIdenticon ref={ref as any} />
}

export default MetaMaskAvatar
