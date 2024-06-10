
import Body from "./Components/Body"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
function App() {
  

  return (
    <>
      <div className ="bg-amber-60 py-3 min-h-screen px-6 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10 "> 
         <Header/>
        <Body/>
        <Footer/> 
      </div>
    </>
  )
}

export default App
