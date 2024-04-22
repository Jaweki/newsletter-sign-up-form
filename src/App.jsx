import NewsLetterForm from "./components/NewsLetterForm"
import Acknowledgements from "./components/Acknowledgements";

const App = () => {
  return (
    <main className=" relative w-full lg:h-screen flex flex-col items-center lg:justify-center gap-2 bg-slate-700">
      <NewsLetterForm />
      <Acknowledgements />
    </main>
  )
}

export default App