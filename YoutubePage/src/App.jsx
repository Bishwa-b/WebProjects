import './index.css';
import Header from './components/Header.jsx';
import ChannelInfo from './components/ChannelInfo.jsx';
import Page from './components/Page.jsx';
import Data from './data.js';

function App() {
  const vidDetails = Data.map((details) => <Page {...details} />);
  return (
    <>
      <Header />
      <ChannelInfo />
      <div className="components-container">{vidDetails}</div>
    </>
  );
}

export default App;
