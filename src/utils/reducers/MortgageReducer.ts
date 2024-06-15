interface MortgageState {
  totalPrice: number
  loanPeriod: number
  downPaymentAmount: number
  downPaymentPercentage: number
  interestRate: number
}

type MortgageAction =
  | { type: 'SET_TOTAL_PRICE'; payload: number }
  | { type: 'SET_LOAN_PERIOD'; payload: number }
  | { type: 'SET_DOWN_PAYMENT_AMOUNT'; payload: number }
  | { type: 'SET_DOWN_PAYMENT_PERCENTAGE'; payload: number }
  | { type: 'SET_INTEREST_RATE'; payload: number }

const mortgageReducer = (
  state: MortgageState,
  action: MortgageAction
): MortgageState => {
  let downPaymentAmount
  let downPaymentPercentage
  let loanPeriod
  let interestRate

  switch (action.type) {
    case 'SET_TOTAL_PRICE':
      downPaymentAmount = Math.round(
        (action.payload * state.downPaymentPercentage) / 100
      )
      return { ...state, totalPrice: action.payload, downPaymentAmount }

    case 'SET_LOAN_PERIOD':
      // Added minimum and maximum values for loan period
      loanPeriod = Math.min(30, Math.max(5, action.payload))
      return { ...state, loanPeriod }

    case 'SET_DOWN_PAYMENT_AMOUNT':
      // Added minimum and maximum values for down payment
      downPaymentAmount = Math.min(
        (state.totalPrice * 80) / 100,
        Math.max(0, action.payload)
      )

      downPaymentPercentage = Math.round(
        (downPaymentAmount / state.totalPrice) * 100
      )
      downPaymentAmount = Math.round(downPaymentAmount)
      return { ...state, downPaymentAmount, downPaymentPercentage }

    case 'SET_DOWN_PAYMENT_PERCENTAGE':
      // Added minimum and maximum values for down payment
      downPaymentPercentage = Math.min(80, Math.max(0, action.payload))

      downPaymentAmount = Math.round(
        (state.totalPrice * downPaymentPercentage) / 100
      )
      return {
        ...state,
        downPaymentAmount,
        downPaymentPercentage: Math.round(downPaymentPercentage),
      }

    case 'SET_INTEREST_RATE':
      // Added minimum and maximum values for interest rate
      interestRate = Math.min(18, Math.max(1, action.payload))
      return { ...state, interestRate }

    default:
      return state
  }
}

export { mortgageReducer }
