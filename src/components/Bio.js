import { useSpring, animated } from 'react-spring';


const Bio = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { mass: 10, tension: 1500, friction: 1000 }
  })

  return (
    <animated.div style={props} className="flex justify-center pt-5 pb-8">
      <p className="dark:text-white w-4/5 darkTrans font-mono">
        I'm an entrepreneur currently building something new at <a className="link" target="_blank" rel="noopener noreferrer" href="https://joinef.com">Entrepreneur First</a>. 
        Before that I was a full stack software engineer at Skyscanner, a data analyst at Amazon and worked at some interesting startups. 
        I am also the co-founder of an app for housemates - <a className="link" target="_blank" rel="noopener noreferrer" href="https://inhouseapp.io">inHouse</a>. 
        You can find me on Twitter <a className="link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/intent/follow?screen_name=camin_mccluskey">@camin_mccluskey</a>. 
      </p>
    </animated.div>
  )
}

export default Bio;
