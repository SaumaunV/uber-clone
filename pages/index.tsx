import type { NextPage } from 'next'
import Map from '../components/Map';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Map></Map>
      <div className="flex-1"></div>
    </div>
  );
}

export default Home;
