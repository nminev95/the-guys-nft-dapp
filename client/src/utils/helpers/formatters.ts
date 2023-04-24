const formatAccountAddressForShortView = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length
  )}`
}

const formatEtherBalance = (balance: string) => {
  if (balance.length > 5) {
    return balance.slice(0, 6)
  } else if (balance.length < 5) {
    return Number(balance).toFixed(4).toString()
  } else {
    return balance
  }
}

const Formatters = {
  formatAccountAddressForShortView,
  formatEtherBalance
}

export default Formatters
