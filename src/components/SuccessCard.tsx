import React from "react";

const SuccessCard = ({
  email,
  reset,
}: {
  email: string;
  reset: () => void;
}) => {
  return (
    <div className="desktop:bg-white desktop:w-[375px] desktop:h-[350px] desktop:rounded-3xl p-7 desktop:grid desktop:grid-cols-1 max-mobile:relative max-mobile:flex max-mobile:flex-col max-mobile:mt-[90px] max-mobile:gap-5">
      <img src="/icon-success.svg" alt="success icon" width={30} height={30} />

      <h1 className="text-dark_slate_grey font-bold text-4xl">
        Thanks for subscribing!
      </h1>

      <p className="text-sm">
        A confirmation email has been sent to
        <span className="text-dark_slate_grey font-bold">
          {" "}
          {email || "ash@loremcompany.com"}
        </span>
        . Please open it and click the button inside to confirm your
        subscription.
      </p>

      <button
        type="button"
        className="max-mobile:w-[80%] w-full h-[50px] bg-dark_slate_grey rounded-lg text-white font-bold hover:tomato_gradient
        max-mobile:fixed max-mobile:bottom-9"
        onClick={reset}
      >
        Dismiss message
      </button>
    </div>
  );
};

export default SuccessCard;
