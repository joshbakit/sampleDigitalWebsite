import { GoDotFill } from "react-icons/go";
import { useState } from "react"


function Pricing() {
    const [isYearly, setisYearly] = useState(false);
    const packages = [
        {
            name: "Start",
            monthlyPrice: 19,
            yearlyPrice: 199,
            descirption: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: "Advance",
            monthlyPrice: 39,
            yearlyPrice: 399,
            descirption: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: "Premium",
            monthlyPrice: 59,
            yearlyPrice: 599,
            descirption: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            bullet: {GoDotFill}
        }
    ]
    
    
    return (
    <div>
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto py-10">
            <div className="header text-center">
                  <h2 className="md:text-5xl text-3xl font-bold text-primary leading-normal">Here are all our plans</h2>
                  <p className="leading-relaxed text-secondary text-base tracking-widest mb-5">
                      A simple paragraph is comprised of three major components.
                        <br />The which is often a declarative sentence.</p>
                    
                <div className="mt-16">
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                        <span className="mr-8 text-2xl font-semibold">Monthly</span>
                        <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-300 ease-in">
                                <div className={ `w-6 h-6 rounded-full ${isYearly ? "bg-primary ml-8" : "bg-gray-50"}`}></div>
                        </div>
                        <span className="ml-8 text-2xl font-semibold">Yearly</span>
                        </label>
                        <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={ () => setisYearly(!isYearly)} />
                </div>
            </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">   
                    {packages.map((pkg, index) =>
                        <div key={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl bg-white">
                            <h3 className="text-3xl font-bold text-center text-primary">{pkg.name}</h3>
                            <p>{ pkg.descirption}</p>
                            <p className="mt-5 text-center text-3xl font-bold text-secondary">
                                {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}
                                <span className="text-sm"> 
                                    /{isYearly ? 'year' : 'month'}
                                </span>
                            </p>
                            <ul className="space-y-2 mt-4">
                                <li className="flex items-center gap-5">
                                    <GoDotFill />
                                    <p className="text-gray-500">Videos of Lessons</p>
                                </li>
                                <li className="flex items-center gap-5">
                                    <GoDotFill />
                                    <p className="text-gray-500">Homework check</p>
                                </li>
                                <li className="flex items-center gap-5">
                                    <GoDotFill />
                                    <p className="text-gray-500">Additional practical task</p>
                                </li>
                                <li className="flex items-center gap-5">
                                    <GoDotFill />
                                    <p className="text-gray-500">Monthly conferences </p>
                                </li>
                                <li className="flex items-center gap-5">
                                    <GoDotFill />
                                    <p className="text-gray-500">Personal advice from teachers</p>
                                </li>
                            </ul>
                            <div className="w-full mx-auto mt-8 flex items-center justify-center">
                                <button className="btn text-white hover:bg-blue-700 border-2 px-5 py-2 rounded-lg bg-blue-600">Get Started</button>
                            </div>
                        </div>
                    )}    
            </div>
        </div>
    </div>
  )
}

export default Pricing
