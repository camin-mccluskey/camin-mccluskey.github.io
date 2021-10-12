import EXAMPLE from './posts/example.md';


export default {
  thoughts: [
    {
      id: 0,
      title: "Hello World",
      subtitle: "A post about the redesign of this site in React with Tailwind CSS",
      updated: "2021/10/12",
      content: {
        type: "local",
        uri: EXAMPLE
      }
    },
    {
      id: 1,
      title: "Stable Future",
      subtitle: "Some thoughts around entropy and predicatibily of the future",
      updated: "2021/10/12",
      content: {
        type: "local",
        uri: EXAMPLE
      }
    },
    {
      id: 2,
      title: "A Framework for Configuring Cross-Account Access in AWS",
      subtitle: "Configuring cross account access permissions can be tricky. Here’s a framework to get it right every time.",
      updated: "2020/11/20",
      content: {
        type: "medium",
        uri: "https://medium.com/swlh/a-framework-for-configuring-cross-account-access-in-aws-3b94daea1063"
      }
    },
    {
      id: 3,
      title: "Deploy a React Application to the Internet Quickly (And for Free)",
      subtitle: "Deploying a React website to the public internet is fast and free using Github Pages. This guide shows you how.",
      updated: "2020/08/06",
      content: {
        type: "medium",
        uri: "https://medium.com/swlh/deploy-a-react-application-to-the-internet-quickly-and-for-free-464b2e26f1d7"
      }
    },
    {
      id: 4,
      title: "11 Strategies for Managing Dependencies Between Agile Squads",
      subtitle: "Agile squads are supposed to be cross-functional, atomic, and capable of delivering a product to the end user completely independently. However, as an organisation scales and the product becomes more complex, issues with dependencies start to creep in.",
      updated: "2020/07/20",
      content: {
        type: "medium",
        uri: "https://betterprogramming.pub/11-strategies-for-managing-dependencies-between-agile-squads-aac11e3c1f11"
      }
    },
    {
      id: 5,
      title: "Personal User Manuals — The Good, the Bad, and a Template",
      subtitle: "What is a personal user manual and how can it help improve your team?",
      updated: "2020/07/10",
      content: {
        type: "medium",
        uri: "https://betterprogramming.pub/personal-user-manuals-the-good-the-bad-and-the-template-7b80db5044ea"
      }
    },
    {
      id: 6,
      title: "A GUI for Local DynamoDB — dynamodb-admin",
      subtitle: "How to set up a GUI for Local DynamoDB",
      updated: "2020/06/29",
      content: {
        type: "medium",
        uri: "https://medium.com/swlh/a-gui-for-local-dynamodb-dynamodb-admin-b16998323f8e"
      }
    },
  ],
  projects: [
    {
      id: 0,
      title: "Ulysess Companion",
      description: "A companion app for reading Jame Joyce's modern classic",
      content: {
       	uri: "https://camin.xyz/ulysess-companion",
	      badges: []
     	}  	
    }
  ]
}