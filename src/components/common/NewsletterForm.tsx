import type { NextPage } from 'next'

const NewsletterForm: NextPage = () => {
  return (
    <form className="relative w-full px-4 py-6 pt-4 space-y-6 md:px-5 bg-lightgray-200 rounded-6xs">
      <div className="text-xs font-medium text-black md:text-base font-ubuntu">
        News Letter
      </div>
      <div className="space-y-4">
        <input
          className="w-full bg-white border-[0.5px] border-dimgray px-2 py-1.5"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="w-full bg-white border-[0.5px] border-dimgray px-2 py-1.5"
          type="email"
          placeholder="Your Mail"
        />
      </div>
      <div className="flex items-center">
        <button className="px-6 mx-auto text-xs font-medium text-white bg-salmon rounded-6xs h-9 md:text-base font-ubuntu">
          Subscribe
        </button>
      </div>
    </form>
  )
}

export default NewsletterForm
