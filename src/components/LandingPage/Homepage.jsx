import Header from './Header';
import Navbar from './Navbar'
import Service from './Service'
import Oppotunity from './Oppotunity';

export default function Homepage() {
  return (
    <div>
      {" "}
      <Navbar />
      <Header />
      <Service />
      <Oppotunity />
    </div>
  );
}
