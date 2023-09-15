import { useSpring, animated } from "react-spring";

const Bio = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { mass: 10, tension: 1500, friction: 1000 },
    delay: 250,
  });

  return (
    <animated.div style={props} className="flex justify-center pt-5 pb-8">
      <p className="dark:text-white w-4/5 darkTrans font-mono">
        I'm the Co-Founder & CTO of{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://stackfix.com"
        >
          Stackfix
        </a>
        , where we’re building an AI-powered marketplace that enables businesses
        to buy, implement and optimise the right software in seconds.
        Previously, I co-founded another startup, Telescope (we used ML for
        sales outreach) and was a software engineer at Skyscanner where I worked
        on identity infrastructure. You can find me on Twitter{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/intent/follow?screen_name=camin_mccluskey"
        >
          @camin_mccluskey
        </a>
        .
      </p>
    </animated.div>
  );
};

export default Bio;
