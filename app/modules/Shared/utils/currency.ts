import Dinero from 'dinero.js'

export const formatCurrency = (amount: number) =>
  Dinero({ amount }).toFormat('$0,0.00')
