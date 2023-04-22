const formatAccountAddressForShortView = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length
  )}`
}

const Formatters = {
  formatAccountAddressForShortView
}

export default Formatters
