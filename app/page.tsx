import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline' 

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">Chat GPT</h1>
      <div className='flex space-x-2 text-center'> 
        <div>
            <div className="flex flex-col items-center justify-center mb-5"> 
                <SunIcon className="h-6 w-6" />
                <h2>Examples</h2>
            </div>
            <div className="space-y-2">
                <p className="infoText">&quot;Explain Something to me&quot;</p> 
                <p className="infoText">&quot;What is the difference between a dog and a cat?&quot;</p> 
                <p className="infoText">&quot;What is the color of the Sun?&quot;</p> 
            </div>
        </div>
        <div>
            <div className="flex flex-col items-center justify-center mb-5">  
                <BoltIcon className="h-6 w-6" />
                <h2>Examples</h2>
            </div>
            <div className="space-y-2">
                <p className="infoText">&quot;Explain Something to me&quot;</p> 
                <p className="infoText">&quot;What is the difference between a dog and a cat?&quot;</p> 
                <p className="infoText">&quot;What is the color of the Sun?&quot;</p> 
            </div>
        </div>
        <div>
            <div className="flex flex-col items-center justify-center mb-5"> 
                <ExclamationTriangleIcon className="h-6 w-6" />
                <h2>Examples</h2>
            </div>
            <div className="space-y-2">
                <p className="infoText">&quot;Explain Something to me&quot;</p> 
                <p className="infoText">&quot;What is the difference between a dog and a cat?&quot;</p> 
                <p className="infoText">&quot;What is the color of the Sun?&quot;</p> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
 