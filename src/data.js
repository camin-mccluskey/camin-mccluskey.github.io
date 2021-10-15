import EXAMPLE from './content/posts/example.md';


export default {
  thoughts: [
    {
      id: "hw",
      title: "Hello World",
      subtitle: "A post about the redesign of this site in React with Tailwind CSS",
      updated: "2021/10/12",
      tags: ["frontend", "react", "tailwind css"],
      content: {
        type: "local",
        uri: EXAMPLE
      }
    },
    {
      id: "stable",
      title: "Stable Future",
      subtitle: "Some thoughts around entropy and predicatibily of the future",
      updated: "2021/10/12",
      tags: [],
      content: {
        type: "local",
        uri: EXAMPLE
      }
    },
    {
      id: "cross-account-framework",
      title: "A Framework for Configuring Cross-Account Access in AWS",
      subtitle: "Configuring cross account access permissions can be tricky. Here’s a framework to get it right every time.",
      updated: "2020/11/20",
      tags: ["AWS", "DevOps"],
      content: {
        type: "medium",
        uri: "https://medium.com/swlh/a-framework-for-configuring-cross-account-access-in-aws-3b94daea1063"
      }
    },
    {
      id: "react-gh-pages",
      title: "Deploy a React Application to the Internet Quickly (And for Free)",
      subtitle: "Deploying a React website to the public internet is fast and free using Github Pages. This guide shows you how.",
      updated: "2020/08/06",
      tags: ["React", "Github"],
      content: {
        type: "medium",
        uri: "https://medium.com/swlh/deploy-a-react-application-to-the-internet-quickly-and-for-free-464b2e26f1d7"
      }
    },
    {
      id: "11-strategies",
      title: "11 Strategies for Managing Dependencies Between Agile Squads",
      subtitle: "Agile squads are supposed to be cross-functional, atomic, and capable of delivering a product to the end user completely independently. However, as an organisation scales and the product becomes more complex, issues with dependencies start to creep in.",
      updated: "2020/07/20",
      tags: ["Agile", "Management"],
      content: {
        type: "medium",
        uri: "https://betterprogramming.pub/11-strategies-for-managing-dependencies-between-agile-squads-aac11e3c1f11"
      }
    },
    {
      id: "pums",
      title: "Personal User Manuals — The Good, the Bad, and a Template",
      subtitle: "What is a personal user manual and how can it help improve your team?",
      updated: "2020/07/10",
      tags: ["Agile", "Management"],
      content: {
        type: "medium",
        uri: "https://betterprogramming.pub/personal-user-manuals-the-good-the-bad-and-the-template-7b80db5044ea"
      }
    },
    {
      id: "local-dynamodb",
      title: "A GUI for Local DynamoDB — dynamodb-admin",
      subtitle: "How to set up a GUI for Local DynamoDB",
      updated: "2020/06/29",
      tags: ["AWS", "DynamoDB"],
      content: {
        type: "medium",
        uri: "https://medium.com/swlh/a-gui-for-local-dynamodb-dynamodb-admin-b16998323f8e"
      }
    },
  ],
  projects: [
    {
      id: "reading-list",
      title: "Reading List ",
      description: "A list of books I'm currently reading and ones I've read",
      content: {
       	uri: "https://camin.xyz/reading-list",
	      badges: ['markdown']
     	}  	
    },
    {
      id: "uc",
      title: "Ulysess Companion",
      description: "A companion app for reading Jame Joyce's modern classic Ulysess.",
      content: {
       	uri: "https://camin.xyz/ulysess-companion",
	      badges: ['react', 'tailwind']
     	}  	
    },
    {
      id: "inhouse-web",
      title: "inHouse - an app for housemates",
      description: "A kind of, sort of, startup I founded with my roomates to make spliting expenses and assigning tasks simple. I built a website and a cross platform mobile app, got a few thousand downloads, went through YC's Startup School and learned a lot in the process.",
      content: {
       	uri: "https://inhouseapp.io",
	      badges: ['react', 'node', 'aws', 'graphql', 'swift', 'kotlin']
     	}  	
    },
    {
      id: "planning-poker-overlay",
      title: "Zoom Planning Poker Overlay",
      description: "During covid lockdown my team at Skyscanner, like everyone else, went fully remote. I thought I could make our sprint estimation sessions a bit more fun by creating an overlay, which would work on Zoom (or your meeting software of choice). Basically, it uses computer vision to determine what point estimate you are giving and places an overlay on the screen of that number. You could use it for this purpose or make your own fun overlays and gestures.",
      content: {
       	uri: "https://github.com/camin-mccluskey/zoom-planning-poker-computer-vision-overlay",
	      badges: ['node', 'tensorflow']
     	}  	
    },
    {
      id: "pum-template",
      title: "Personal User Manual Template",
      description: "A template for making your own Personal User Manual, often called a personal README",
      content: {
       	uri: "https://github.com/camin-mccluskey/personal-user-manual-template",
	      badges: ['markdown']
     	}  	
    },
    {
      id: "rl-sandox",
      title: "Reinforcement Learning Sandbox",
      description: "Playing around with OpenAI's Gym for RL. Haven't gotten around to implementing most of the gym's I planned on.",
      content: {
       	uri: "https://github.com/camin-mccluskey/rl-sandbox",
	      badges: ['python', 'tensorflow']
     	}  	
    },
    {
      id: "p5-gol",
      title: "Conway's Game of Life in P5.js",
      description: "Implemented Conway's GOL using P5.js, a lot of fun to mess around with.",
      content: {
       	uri: "https://editor.p5js.org/camin-mccluskey/full/9KIAu07_i",
	      badges: ['node']
     	}  	
    },
    {
      id: "pokerwars-bot",
      title: "Pokerwars Python Bot",
      description: "I'm not a gambler but this was pretty fun to implement. Unfortunately they've closed down the service so my bot goes unused these days.",
      content: {
       	uri: "https://github.com/camin-mccluskey/pokerwars-python-bot",
	      badges: ['python']
     	}  	
    },
  ]
}