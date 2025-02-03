import Header from './components/Header'
import Footer from './components/Footer'
import ChannelInfo from './components/ChannelInfo'
import Data from './data'
import './index.css'

function App() {
  const ProductsDetails = Data.map((products) => <ChannelInfo {...products}/>)

  return (
    <>
      <Header/>
      <main>
      {ProductsDetails}
      </main>
      <Footer/>
    </>
  )
}

export default App
