import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="flex items-center justify-between py-4 px-6 bg-white text-[#333333]">
        <div className="flex items-center gap-6 pl-2.5">
          <h2 className="text-xl m-0 text-black">Versel Shop</h2>
          <Link className="text-inherit no-underline text-sm" href="/shop">Shop</Link>
        </div>
        <div className="flex items-center gap-4 p-5">
          <button className="flex items-center justify-center border-none bg-transparent text-[#333333] p-0 cursor-pointer" aria-label="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search preview-icon"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </button>
          <button className="flex items-center justify-center border-none bg-transparent text-[#333333] p-0 cursor-pointer" aria-label="shopping bag">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-handbag preview-icon">
              <path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z" />
              <path d="M8 11V6a4 4 0 0 1 8 0v5" />
            </svg>
          </button>
        </div>
      </header>
      <section className="flex flex-col items-center pt-25 pb-25 pl-5 pr-22.5">
        <h1 className="text-3xl font-bold mt-0 mb-0 ml-0 mr-2.5 max-w-xl font-sans">A Storefront Built on Vercel Shop</h1>
        <p className="text-sm text-[#333333] max-w-xl m-0 font-sans">Agent-ready commerce, powered by Shopify, Next, and Eve.</p>
      </section>

      <section className="pt-0 pb-0">
        <div className="flex justify-between items-center mb-6 w-full py-4 px-6">
          <h2 className="text-[28px] font-normal outline-[color-mix(in_oklab,var(--ring)_50%,transparent)] m-0">Products</h2>
          <a className="text-[13px] text-[#666] no-underline" href="#">View All</a>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="min-w-0">
            <div className="relative w-full flex flex-row-reverse">
              <img className="w-full aspect-3/4 object-contain block" src="/img1.webp" alt="White T-Shirt" />
              <button className="absolute right-2 bottom-2 top-auto w-8 h-8 border border-solid border-[#ddd] bg-white rounded-[50px] " aria-label="Add ApexFlow Tee">+</button>
            </div>
            <p className="text-[14px] my-3 ml-0 mr-1 text-black font-bold">ApexFlow</p>
            <span className="text-[14px]">$48.00</span>
          </div>
          <div className="min-w-0">
            <div className="relative w-full flex flex-row-reverse">
              <img className="w-full aspect-3/4 object-contain block" src="/img2.webp" alt="Red T-Shirt" />
              <button className="absolute right-2 bottom-2 top-auto w-8 h-8 border border-solid border-[#ddd] bg-white rounded-[50px]" aria-label="Add PeakDrive Tee">+</button>
            </div>
            <p className="text-[14px] my-3 ml-0 mr-1 text-black font-bold">PeakDrive Tee</p>
            <span className="text-[14px]">$48.00</span>
          </div>
          <div className="min-w-0">
            <div className="relative w-full flex flex-row-reverse">
              <img className="w-full aspect-3/4 object-contain block" src="/img3.webp" alt="Purple Jacket" />
              <button className="absolute right-2 bottom-2 top-auto w-8 h-8 border border-solid border-[#ddd] bg-white rounded-[50px]" aria-label="Add SwiftEdge Jacket">+</button>
            </div>
            <p className="text-[14px] my-3 ml-0 mr-1 text-black font-bold">SwiftEdge Jacket</p>
            <span className="text-[14px]">$168.00</span>
          </div>
          <div className="min-w-0">
            <div className="relative w-full flex flex-row-reverse">
              <img className="w-full aspect-3/4 object-contain block" src="/img4.webp" alt="Black Hoodie" />
              <button className="absolute right-2 bottom-2 top-auto w-8 h-8 border border-solid border-[#ddd] bg-white rounded-[50px]" aria-label="Add PeakDrift Hoodie">+</button>
            </div>
            <p className="text-[14px] my-3 ml-0 mr-1 text-black font-bold">PeakDrift Hoodie</p>
            <span className="text-[14px]">$118.00</span>
          </div>
          <div className="min-w-0">
            <div className="relative w-full flex flex-row-reverse">
              <img className="w-full aspect-3/4 object-contain block" src="/img5.webp" alt="Orange Swirtshirt" />
              <button className="absolute right-2 bottom-2 top-auto w-8 h-8 border border-solid border-[#ddd] bg-white rounded-[50px]" aria-label="Add PaceShift Swirtshirt">+</button>
            </div>
            <p className="text-[14px] my-3 ml-0 mr-1 text-black font-bold">PaceShift Swirtshirt</p>
            <span className="text-[14px]">$98.00</span>
          </div>
          <div className="min-w-0">
            <div className="relative w-full flex flex-row-reverse">
              <img className="w-full aspect-3/4 object-contain block" src="/img6.webp" alt="Red Swirtshirt" />
              <button className="absolute right-2 bottom-2 top-auto w-8 h-8 border border-solid border-[#ddd] bg-white rounded-[50px]" aria-label="Add SwiftEdge Jacket">+</button>
            </div>
            <p className="text-[14px] my-3 ml-0 mr-1 text-black font-bold">SwiftEdge Jacket</p>
            <span className="text-[14px]">$168.00</span>
          </div>
          <div className="min-w-0">
            <div className="relative w-full flex flex-row-reverse">
              <img className="w-full aspect-3/4 object-contain block" src="/img7.webp" alt="Black T-shirt" />
              <button className="absolute right-2 bottom-2 top-auto w-8 h-8 border border-solid border-[#ddd] bg-white rounded-[50px]" aria-label="Add PivotPrime Tee">+</button>
            </div>
            <p className="text-[14px] my-3 ml-0 mr-1 text-black font-bold">PivotPrime Tee</p>
            <span className="text-[14px]">$48.00</span>
          </div>
          <div className="min-w-0">
            <div className="relative w-full flex flex-row-reverse">
              <img className="w-full aspect-3/4 object-contain block" src="/img8.webp" alt="Blue hoodie" />
              <button className="absolute right-2 bottom-2 top-auto w-8 h-8 border border-solid border-[#ddd] bg-white rounded-[50px]" aria-label="Add HaloLine Hoodie">+</button>
            </div>
            <p className="text-[14px] my-3 ml-0 mr-1 text-black font-bold">HaloLine Hoodie</p>
            <span className="text-[14px]">$118.00</span>
          </div>
        </div>
      </section>
    </main>
  )
}
