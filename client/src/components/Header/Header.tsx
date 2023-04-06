import Button from '@components/common/Button/Button'
import './Header.scss'

const Header = () => {
  return (
    <div className="the-guys-header">
      <p>Logo goessshereee</p>
      <Button text="Connect wallet" onClick={() => console.log('connect')} />
    </div>
  )
}

export default Header
