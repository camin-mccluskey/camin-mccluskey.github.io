import Resume from '../content/resume/resume.pdf';
import data from '../data';
import Header from '../components/Header';
import Content from '../components/Content';
import CalendlyEmbed from '../components/CalendlyEmbed';


function Home({ darkMode, setDarkMode }) {

  return (
    <div className="dark:bg-black min-w-screen min-h-screen darkTrans pb-20">
      <div className="flex flex-col justify-center w-full pt-8 relative">
        { /* Header */ }
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Bio */}
        <div className="flex justify-center pt-5 pb-8">
          <p className="dark:text-white w-4/5 darkTrans font-mono">
            I'm an entrepreneur currently building something new at <a className="link" target="_blank" rel="noopener noreferrer" href="https://joinef.com">Entrepreneur First</a>. 
            Before that I was a full stack software engineer at Skyscanner, a data analyst at Amazon and worked at some interesting startups. 
            I am also the co-founder of an app for housemates - <a className="link" target="_blank" rel="noopener noreferrer" href="https://inhouseapp.io">inHouse</a>. 
            You can find me on Twitter <a className="link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/intent/follow?screen_name=camin_mccluskey">@camin_mccluskey</a>. 
          </p>
        </div>

        {/* Divider */}
        {/* <div className="w-4/5 h-px dark:bg-gray-200 darkTrans bg-gray-800 self-center my-5"/> */}

        {/* Content */}
        <Content data={data}/>
        
        {/* Calendly Embed */}
        <CalendlyEmbed darkMode={darkMode} />
      </div>
    </div>
  );
}

export default Home;
