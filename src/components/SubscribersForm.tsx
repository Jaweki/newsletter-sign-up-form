import React, { useState } from "react";

interface Props {
  email: string;
  setEmail: (email: string) => void;
  setSubscribe: (boolean: boolean) => void;
}

const SubscribersForm = ({ email, setEmail, setSubscribe }: Props) => {
  const [enabled, setEnabled] = useState(false);

  const handleEmailChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const newEmail: string = e.currentTarget.value;
    setEmail(newEmail);
    setEnabled(isValidEmail(newEmail));
    console.log(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribe(true);
    console.log("Email submitted: ", email);
  };

  const isValidEmail = (email_: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email_);
  };

  return (
    <div className="max-mobile:grid max-mobile:grid-col-1 desktop:flex desktop:flex-row-2 desktop:flex-row-reverse hidden desktop:bg-white desktop:p-4 desktop:rounded-3xl desktop:h-[70%] desktop:w-[60%] desktop:gap-8 items-center">
      <img
        src="/illustration-sign-up-mobile.svg"
        alt="sign up banner"
        className="desktop:hidden"
      />
      <img
        src="/illustration-sign-up-desktop.svg"
        alt="sign up banner"
        className="max-mobile:hidden h-[99%]"
      />

      <div className="pl-2 desktop:p-9 max-mobile:mt-8 grid grid-cols-1">
        <article className="flex flex-col flex-wrap justify-center  text-roboto text-md text-dark_slate_grey">
          <h1 className="font-bold text-4xl ">Stay updated!</h1>
          <p className="mt-4 flex flex-wrap w-full">
            Join 60,000+ product managers receiveing monthly updates on:
          </p>
          <ul className="list-image-icon_list m-4 pl-3">
            <li className="pl-2 mb-2">
              Product dicovery and building what matters
            </li>
            <li className="pl-2 mb-2">
              Measuring to ensure updates are a success
            </li>
            <li className="pl-2 mb-2">And much more!</li>
          </ul>
        </article>

        <div className="w-full pr-2 mb-5">
          <div className="flex justify-between">
            <span className="text-dark_slate_grey text-sm font-bold">
              Email address
            </span>
            <span
              className={`${
                (enabled && email.length > 0) || email.length === 0
                  ? "hidden"
                  : "text-red text-sm"
              }`}
            >
              Valid email required
            </span>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="email@company.com"
              className={` border border-solid rounded-lg w-full h-[40px] p-4
           ${!enabled ? "invalid:border-red  invalid:bg-rose_300" : ""}
           `}
              value={email}
              onChange={(event) => handleEmailChange(event)}
            />

            <button
              type="submit"
              className={` rounded-lg w-full h-[50px] mt-6 text-white font-bold  ${
                !enabled
                  ? "bg-grey"
                  : "bg-dark_slate_grey hover:tomato_gradient"
              }`}
              disabled={!enabled}
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribersForm;
