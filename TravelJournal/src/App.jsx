import Header from './components/Header.jsx';
import Entry from './components/Entry.jsx';
import EntryData from './data.js';
import './index.css';

function App() {
  const entryElement = EntryData.map((entries) => (
    <Entry
      key={entries.id}
      {...entries}

      /*Three ways to give props*/

      /*1.{...entries}
      Basically entries object will hold :
        img={entries.img}
        title={entries.title}
        country={entries.country}
        googleMapsLink={entries.googleMapsLink}
        dates={entries.dates}
        text={entries.text}
      */

      /*2.entry={entries}*/

      /*3.img={entries.img}
      title={entries.title}
      country={entries.country}
      googleMapsLink={entries.googleMapsLink}
      dates={entries.dates}
      text={entries.text}*/
    />
  ));

  return (
    <>
      <Header />
      {entryElement}
    </>
  );
}

export default App;

/*img: (will be an object with the following properties/values)
{
    src: https://scrimba.com/links/travel-journal-japan-image-url",
    alt: "Mount Fuji"
}

title:
Mount Fuji

country:
Japan

googleMapsLink:
https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu

dates:
12 Jan, 2021 - 24 Jan, 2021

text:
Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
*/
