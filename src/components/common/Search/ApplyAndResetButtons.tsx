import React from 'react'

interface IProps {
  onReset: () => void
  onApply: () => void
}

const ApplyAndResetButtons: React.FC<IProps> = ({ onReset, onApply }) => {
  return (
    <div className="flex justify-end mt-4 space-x-4 font-normal">
      <button
        className="px-4 py-2 text-sm text-gray-600 hover:text-darkslateblue-100 focus:outline-none"
        onClick={onReset}
      >
        Reset
      </button>
      <button
        className="px-4 py-2 text-sm text-white rounded bg-darkslateblue-100 hover:opacity-90 focus:outline-none"
        onClick={onApply}
      >
        Apply
      </button>
    </div>
  )
}

export default ApplyAndResetButtons
