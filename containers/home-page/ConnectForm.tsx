import Image from 'next/image';
import Link from 'next/Link';
import ETH from '@/public/eth.svg';
import LYX from '@/public/lyx.svg';
import BLYX from '@/public/blyx.svg';

import ArrowUp from "@/public/arrowUp.svg";
import ArrowDown from "@/public/arrowDown.svg";
import IconButton from "@/components/global/IconButton";

const ConnectFrom = () => {
  return (
    <div className='max-w-screen-md w-[617px] mx-auto mt-5 text-white'>
      <h1 className='py-1 px-4 font-bold text-2xl text-xl'>Transfer your tokens across blockchains</h1>
      <p className='py-1 px-4 mb-2 text-sm'>Securely transfer tokens between the LUKSO and Ethereum blockchains. <Link href="/" className="text-blue-200 decoration-blue-200 underline decoration-solid">How it works</Link></p>
      <div className='py-10 px-10 rounded-xl border-2 border-blue-900 bg-gray-900'>
        <p className='py-3'>From:</p>
        <div className="flex w-full gap-1"  >
          <div className="py-2 bg-gray-800 rounded-xl py-5 px-5">
              <Image src={ETH} alt="alt" width={50} height={50} className="m-auto"/>
            <div className='text-center pt-4'>
              <p className=''>Ethereum</p>  
              <p className=''>0x8d...df87</p>
            </div>
          </div>
          <div className="grow bg-gray-800 rounded-xl py-5 px-5 ">
            <p className="text-blue-200 text-sm">Send:</p>
            <div className="flex justify-between mt-3">
              <div>
                <h1 className="text-2xl">0.0</h1></div>
              <div className="flex justify-between">
                <Image src={LYX} alt="lyx" className="inline-block"/>
                <div className="ml-2 mt-1">wLYX</div>
              </div>
            </div>
            <div className="mt-[25px]">
              <div className="flex text-blue-200 text-sm">
                <div className="mr-auto">$0.0</div>
                <div className="ml-auto">
                  Balance: 46.332 Max
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-2 text-center'>
          <button className="bg-gray-800 rounded-md py-2 px-2 mx-1 ">
            <div className="flex justify-center">
              <Image src={ArrowUp} alt="up"/>
              <Image src={ArrowDown} alt="down"/>
            </div>
          </button>
        </div>
        <p className='py-3'>To:</p>
        <div className="flex w-full gap-1"  >
          <div className="py-2 bg-gray-800 rounded-xl py-5 px-5">
            <Image src={BLYX} alt="alt" width={50} height={50} className="m-auto"/>
            <div className='text-center pt-4'>
              <p className=''>LUKSO</p>  
              <p className=''>buddyk#44</p>
            </div>
          </div>
          <div className="grow bg-gray-800 rounded-xl py-5 px-5 ">
            <p className="text-blue-200 text-sm">Receive:</p>
            <div className="flex justify-between mt-3">
              <div className="text-2xl">0.0</div>
              <div className="flex justify-between ">
                <Image src={LYX} alt="lyx"/>
                <div className="ml-2 mt-1">LYX</div>
              </div>
            </div>
            <div className="mt-[25px] text-blue-200">
              <div className="text-sm">$0.0</div>
            </div>
          </div>
        </div>
        <div>
          <button className='w-full bg-indigo-700 text-white hover:bg-indigo-800 rounded-xl py-4 px-4 text-center mt-5'>Swap</button>
        </div>
      </div>
      
    </div>
  )
}

export default ConnectFrom;