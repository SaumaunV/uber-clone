import type { NextPage } from 'next'
import MainInterface from '../components/MainInterface';
import Map from '../components/Map';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Map></Map>
      <MainInterface />
    </div>
  );
}

export default Home;
