import EXAMPLE from './posts/example.md';


export default {
  thoughts: [
    {
      id: 0,
      title: "Hello World",
      subtitle: "A post about the redesign of this site in React with Tailwind CSS",
      content: {
        type: "local",
        uri: EXAMPLE
      }
    },
    {
      id: 1,
      title: "Stable Future",
      subtitle: "Some thoughts around entropy and predicatibily of the future",
      content: {
        type: "local",
        uri: EXAMPLE
      }
    },
    {
      id: 2,
      title: "A Framework for Cross Account Access",
      subtitle: "A piece I wrote about configuring cross account access for AWS resources",
      content: {
        type: "medium",
        uri: "https://medium.com/swlh/a-framework-for-configuring-cross-account-access-in-aws-3b94daea1063"
      }
    }
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