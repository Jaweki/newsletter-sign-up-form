import SubscribersForm from "./components/SubscribersForm";
import SuccessCard from "./components/SuccessCard";
import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState<string>("");
  const [subscribe, setSubscribe] = useState<boolean>(false);

  const handleReset = (): void => {
    setSubscribe(false);
    setEmail("");
  };

  return (
    <main>
      <section className="desktop:bg-charcoal_grey desktop:w-full desktop:h-[100vh] desktop:flex flex-col justify-center items-center">
        {!subscribe && (
          <SubscribersForm
            email={email}
            setEmail={setEmail}
            setSubscribe={setSubscribe}
          />
        )}
        {subscribe && <SuccessCard email={email} reset={handleReset} />}

        <div
          className={`${
            subscribe
              ? "desktop:mt-3 max-mobile:p-2 max-mobile:fixed max-mobile:bottom-0 desktop:fixed desktop:bottom-0"
              : "desktop:mt-3 max-mobile:p-2 desktop:fixed desktop:bottom-0"
          }`}
        >
          <p className="text-sm text-white max-mobile:text-black">
            Challenge by{" "}
            <a
              target="_blank"
              href="https://www.frontendmentor.io/?ref=challenge"
              className="underline text-blue-500"
            >
              Frontend Mentor.
            </a>{" "}
            Coded by{" "}
            <a
              target="_blank"
              href="https://jaweki.com"
              className="underline text-blue-500"
            >
              JaWeKi
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default App;
