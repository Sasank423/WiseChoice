import Image from 'next/image';
import Chatbot from './components/Chatbot';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import MoreInfo from './components/MoreInfo';
import Utilityprovider from './providers/utilityprovider';

export default function Home() {
  return (
    // <Utilityprovider>
    <main className="flex h-screen overflow-hidden">
      <Sidebar />
      <Main />
      <MoreInfo />
      <Chatbot />
    </main>
    // </Utilityprovider>
  );
}
