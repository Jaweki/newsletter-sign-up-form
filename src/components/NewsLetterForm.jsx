import { useState } from "react"


const NewsLetterForm = () => {
    const [emailInput, setEmailInput] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isSubscriptionConfirmed, setIsSubscriptionConfirmed] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateEmail) {
            setIsSubscriptionConfirmed(true);
        }
    }

    const handleEmailInputChange = (event) => {
        const inputValue = event.currentTarget.value;
        setEmailInput(inputValue);
        setIsEmailValid(validateEmail());
    }

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(emailInput);
    };

  return (
    <section>
        {/* form-card */}
        { !isSubscriptionConfirmed && <div className=" lg:w-[60vw] w-full lg:h-[32vw] bg-white rounded-xl flex lg:flex-row flex-col items-center xl:p-3 lg:p-1 gap-5 ">
            <img src="/illustration-sign-up-mobile.svg" 
            alt="" 
            className=" lg:hidden w-full h-[25%] " />
            <form onSubmit={handleSubmit} className="grow max-lg:w-full lg:h-full xl:p-7 lg:p-2 p-4 flex flex-col gap-4 ">
                <h3 className=" text-3xl sm:text-4xl text-slate-800 font-bold">Stay updated!</h3>
                <div className="flex flex-col gap-3 max-lg:text-sm">
                    <span>
                    Join 60,000+ product managers receiving monthly updates on:
                    </span>
                    <ul className=" list-inside list-image-[url(./icon-list.svg)] xl:gap-1 flex flex-col">
                        <li className=" list-item">Product discovery and building what matters</li>
                        <li className=" list-item">Measuring to ensure updates are a success</li>
                        <li className=" list-item">And much more!</li>
                    </ul>
                </div>
                <div className=" w-full flex flex-col gap-2 relative">
                    {/* <div className="w-full flex flex-row items-center justify-between"> */}
                    <label htmlFor="input-email" className="text-xs text-slate-700 font-bold">Email</label>
                    {/* </div> */}
                    <input id="input-email" value={emailInput} onChange={handleEmailInputChange} type="email" name="email" placeholder="email@company.com" className=" w-full xl:p-2 max-lg:p-2 p-1 border border-gray-400 rounded-lg focus:border-0 focus:outline outline-2 focus:outline-slate-700 invalid:focus:outline-red-700 invalid:focus:bg-red-200 peer" />
                    <span className="hidden text-xs text-red-500 peer-invalid:block absolute top-0 right-0">Valid Email required</span>
                </div>
                <button type="submit" disabled={!isEmailValid} className={`w-full xl:p-3 max-lg:p-3 p-2 text-white text-md bg-slate-800 rounded-lg font-bold transition-color duration-300 ease-linear ${isEmailValid ? "hover:text-gray-300 hover:bg-gradient-to-r from-pink-500 to-pink-800 bg-opacity-100 ": " bg-opacity-50"}`}>
                    Subscribe to monthly newsletter
                </button>
            </form>
            <img src="/illustration-sign-up-desktop.svg" 
            alt="" 
            className=" hidden lg:block h-full " />
        </div> }

        {/* confirmation-card */}
        {isSubscriptionConfirmed && <div className=" bg-white w-[320px] rounded-lg flex flex-col p-5 gap-5">
            <img src="./icon-success.svg" alt="" className="w-7 h-7 "/>
            <h3 className=" text-4xl text-slate-800 font-bold ">Thanks for subscribing!</h3>
            <p>A confirmation email has been sent to <span className=" text-sm font-bold text-slate-800">{emailInput}</span>. Please open it and click the button inside to confirm your subscription.</p>
            <button type="button" onClick={() => {
                setIsSubscriptionConfirmed(false);
                setEmailInput("");
                setIsEmailValid(false);
            }} className=" text-sm font-bold text-white bg-slate-800 rounded-lg w-full p-3 hover:bg-gradient-to-r from-pink-700 to-pink-900 hover:text-gray-400 transition-colors duration-300 ease-linear">
                Dismiss message
            </button>
        </div>
        }

    </section>
  )
}

export default NewsLetterForm