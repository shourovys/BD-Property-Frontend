import formatPrice from '@/utils/formatPrice'
import { mortgageReducer } from '@/utils/reducers/MortgageReducer'
import type { NextPage } from 'next'
import { useReducer } from 'react'

interface IProps {
  propertyPrice: number
}

const PropertyDetailsMortgage: NextPage<IProps> = ({ propertyPrice }) => {
  const initialState = {
    totalPrice: propertyPrice,
    loanPeriod: 25,
    downPaymentAmount: (propertyPrice * 30) / 100,
    downPaymentPercentage: 30,
    interestRate: 11,
  }

  const [
    {
      totalPrice,
      loanPeriod,
      downPaymentAmount,
      downPaymentPercentage,
      interestRate,
    },
    dispatch,
  ] = useReducer(mortgageReducer, initialState)

  // Calculations
  const loanAmount = totalPrice - downPaymentAmount
  const monthlyInterestRate = interestRate / 100 / 12
  const totalPayments = loanPeriod * 12

  // Update monthly payment calculation
  const monthlyPayment =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -totalPayments))

  // Calculate total interest
  const totalInterest = monthlyPayment * totalPayments - loanAmount

  // Calculate principal amount
  const principal = loanAmount - totalInterest

  // Calculate total loan amount
  const totalLoanAmount = loanAmount + totalInterest

  // Calculate total price range
  const totalPriceRange = Math.round(propertyPrice + (propertyPrice * 30) / 100)

  const handleTotalPriceChange = (value: number) => {
    dispatch({ type: 'SET_TOTAL_PRICE', payload: value })
  }

  const handleLoanPeriodChange = (value: number) => {
    dispatch({ type: 'SET_LOAN_PERIOD', payload: value })
  }

  const handleDownPaymentAmountChange = (value: number) => {
    dispatch({ type: 'SET_DOWN_PAYMENT_AMOUNT', payload: value })
  }

  const handleDownPaymentPercentageChange = (value: number) => {
    dispatch({ type: 'SET_DOWN_PAYMENT_PERCENTAGE', payload: value })
  }

  const handleInterestRateChange = (value: number) => {
    dispatch({ type: 'SET_INTEREST_RATE', payload: value })
  }

  return (
    <section
      id='loanCalculator'
      className='space-y-5 pt-10 font-inter md:pt-8 lg:pt-16'
    >
      <div className='space-y-2'>
        <h2 className='text-xl font-medium md:text-2xl'>Mortgage Calculator</h2>
        <p className='mb-4 text-sm text-gray-600 md:text-base'>
          Calculate and view the monthly mortgage on this apartment
        </p>
      </div>
      <div className='grid w-full grid-cols-1 divide-x divide-lightgray-100 rounded-3xs border border-lightgray-100 bg-white md:grid-cols-5'>
        <div className='col-span-3 space-y-8 px-4 py-10 pr-8 text-sm md:text-base'>
          {/* Total Price */}
          <div>
            <label htmlFor='totalPrice' className='mb-1.5 block'>
              Total Price
            </label>
            <div className='grid grid-cols-2 place-items-center gap-4'>
              <div className='flex items-center justify-between rounded border px-2 focus-within:ring-1 focus-within:ring-black'>
                <input
                  type='number'
                  id='totalPrice'
                  className='w-full py-1.5 focus:outline-none'
                  value={totalPrice}
                  onChange={(e) =>
                    handleTotalPriceChange(parseFloat(e.target.value))
                  }
                />
                <p className='font-lato font-medium text-gray-400'>BDT</p>
              </div>
              <input
                type='range'
                id='totalPriceRange'
                className='h-2 w-full appearance-none rounded-full align-bottom'
                min='0'
                max={totalPriceRange}
                step={1} // Adjust the step value accordingly
                value={totalPrice}
                onChange={(e) =>
                  handleTotalPriceChange(parseFloat(e.target.value))
                }
                style={{
                  background: `linear-gradient(to right, #d76147 0%, #d76147 ${
                    (totalPrice / totalPriceRange) * 100
                  }%, #F5F5F5 ${
                    (totalPrice / totalPriceRange) * 100
                  }%, #F5F5F5 100%)`,
                  outline: 'none',
                  WebkitAppearance: 'none',
                  appearance: 'none',
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>

          {/* Loan Period */}
          <div>
            <label htmlFor='loanPeriod' className='mb-1.5 block'>
              Loan Period
            </label>
            <div className='grid grid-cols-2 place-items-center gap-4'>
              <div className='flex items-center justify-between rounded border px-2 focus-within:ring-1 focus-within:ring-black'>
                <input
                  type='number'
                  id='loanPeriod'
                  className='w-full py-1.5 focus:outline-none'
                  value={loanPeriod}
                  onChange={(e) =>
                    handleLoanPeriodChange(parseInt(e.target.value))
                  }
                />
                <p className='font-lato font-medium text-gray-400'>Years</p>
              </div>
              <input
                type='range'
                id='loanPeriodRange'
                className='h-2 w-full appearance-none rounded-full align-bottom'
                min='5'
                max='30'
                step='1'
                value={loanPeriod}
                onChange={(e) =>
                  handleLoanPeriodChange(parseInt(e.target.value))
                }
                style={{
                  background: `linear-gradient(to right, #d76147 0%, #d76147 ${
                    ((loanPeriod - 5) / 25) * 100
                  }%, #F5F5F5 ${((loanPeriod - 5) / 25) * 100}%, #F5F5F5 100%)`,
                  outline: 'none',
                  WebkitAppearance: 'none',
                  appearance: 'none',
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>

          {/* Down Payment Amount */}
          <div>
            <label htmlFor='downPaymentAmount' className='mb-1.5 block'>
              Down Payment Amount
            </label>
            <div className='grid grid-cols-2 place-items-center gap-4'>
              <div className='flex items-center justify-between rounded border focus-within:ring-1 focus-within:ring-black'>
                <input
                  type='number'
                  id='downPaymentAmount'
                  className='w-full rounded px-2 py-1.5 focus:outline-none'
                  value={downPaymentAmount} // Replace with the actual value
                  onChange={(e) =>
                    handleDownPaymentAmountChange(parseFloat(e.target.value))
                  }
                />
                <p className='h-full rounded-br border-l bg-lightgray-100 bg-opacity-50 px-2 py-1.5 font-lato font-medium text-gray-600'>
                  {downPaymentPercentage}%
                </p>
              </div>
              <input
                type='range'
                // id='downPaymentAmountRange' // Use a unique id here
                className='h-2 w-full appearance-none rounded-full align-bottom'
                min='0'
                max='80' // Adjust the max value accordingly
                step='1' // Adjust the step value accordingly
                value={downPaymentPercentage} // Replace with the actual value
                onChange={(e) =>
                  handleDownPaymentPercentageChange(parseFloat(e.target.value))
                }
                style={{
                  background: `linear-gradient(to right, #d76147 0%, #d76147 ${
                    (downPaymentPercentage / 80) * 100
                  }%, #F5F5F5 ${
                    (downPaymentPercentage / 80) * 100
                  }%, #F5F5F5 100%)`,
                  outline: 'none',
                  WebkitAppearance: 'none',
                  appearance: 'none',
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label htmlFor='interestRate' className='mb-1.5 block'>
              Interest Rate
            </label>
            <div className='grid grid-cols-2 place-items-center gap-4'>
              <div className='flex items-center justify-between rounded border px-2 focus-within:ring-1 focus-within:ring-black'>
                <input
                  type='number'
                  id='interestRate'
                  className='w-full py-1.5 focus:outline-none'
                  value={interestRate}
                  onChange={(e) =>
                    handleInterestRateChange(parseFloat(e.target.value))
                  }
                />
                <p className='font-lato font-medium text-gray-400'>%</p>
              </div>
              <input
                type='range'
                id='interestRateRange'
                className='h-2 w-full appearance-none rounded-full align-bottom'
                min='1'
                max='18'
                step='0.01'
                value={interestRate}
                onChange={(e) =>
                  handleInterestRateChange(parseFloat(e.target.value))
                }
                style={{
                  background: `linear-gradient(to right, #d76147 0%, #d76147 ${
                    (interestRate / 18) * 100
                  }%, #F5F5F5 ${(interestRate / 18) * 100}%, #F5F5F5 100%)`,
                  outline: 'none',
                  WebkitAppearance: 'none',
                  appearance: 'none',
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>
        </div>
        <div className='col-span-2 space-y-8 px-8 py-10'>
          <div className='flex flex-col items-center justify-between gap-1'>
            {/* Display monthly payment */}
            <p className='font-ubuntu text-xl font-medium'>
              BDT &nbsp;
              <span className='text-[38px]'>
                {formatPrice(monthlyPayment).split(' ')[0]}
              </span>
            </p>
            <p className='mt-1.5 font-ubuntu text-[38px] font-medium'>
              {formatPrice(monthlyPayment).split(' ')[1]}
            </p>
            <p className='self-end font-ubuntu text-sm opacity-[0.74] md:text-base'>
              Per Month
            </p>
          </div>
          {/* TOTAL LOAN AMOUNT */}
          <div className='text-center'>
            <div className='text-sm font-medium opacity-[0.44] md:text-base'>
              TOTAL LOAN AMOUNT
            </div>

            {/*  Display total loan amount */}
            <h1 className='text-center text-sm font-medium md:text-base'>
              BDT &nbsp;
              <span className='text-2xl font-medium lg:text-3xl'>
                {formatPrice(totalLoanAmount)}
              </span>
            </h1>
          </div>

          {/* Combined Progress Bar */}
          <div className='space-y-1 text-center'>
            <div className='text-sm font-medium opacity-[0.44] md:text-base'>
              PAYMENT BREAKDOWN
            </div>
            <div className='relative h-9'>
              <div
                className='absolute left-0 top-0 h-full bg-salmon'
                style={{ width: `${(totalInterest / totalLoanAmount) * 100}%` }}
              ></div>
              <div
                className='absolute right-0 top-0 h-full bg-salmon-light'
                style={{
                  width: `${(1 - totalInterest / totalLoanAmount) * 100}%`,
                }}
              ></div>
            </div>
            {/* Labels for Progress Bar */}
            <div className='flex justify-between'>
              <div className='text-sm'>Interest</div>
              <div className='text-sm'>Principal</div>
            </div>
          </div>

          {/* Apply for Loan */}
          <button className='flex w-full cursor-pointer items-center justify-center rounded bg-salmon p-2 font-medium text-white'>
            APPLY FOR LOAN
          </button>
        </div>
      </div>
    </section>
  )
}

export default PropertyDetailsMortgage
