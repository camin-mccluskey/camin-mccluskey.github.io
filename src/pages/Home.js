import data from '../data';
import Header from '../components/Header';
import Content from '../components/Content';
import CalendlyEmbed from '../components/CalendlyEmbed';
import Footer from '../components/Footer';
import Bio from '../components/Bio';


function Home({ darkMode, setDarkMode }) {

  return (
    <div className="dark:bg-black min-w-screen min-h-screen darkTrans pb-3">
      <div className="flex flex-col justify-start w-full min-h-screen pt-8 relative">
        { /* Header */ }
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Bio */}
        <Bio />

        {/* Divider */}
        {/* <div className="w-4/5 h-px dark:bg-gray-200 darkTrans bg-gray-800 self-center my-5"/> */}

        {/* Content */}
        <Content data={data}/>
        
        {/* Calendly Embed */}
        <CalendlyEmbed darkMode={darkMode} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
