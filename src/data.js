import EXAMPLE from './posts/example.md';


export default data = {
  thoughts: [
    {
      title: "hello world",
      subtitle: "this is my first card",
      content: {
        type: "local",
        uri: EXAMPLE
      }
    },
    {
      title: "hello world 2",
      subtitle: "this is my second card",
      content: {
        type: "local",
        uri: EXAMPLE
      }
    },
    {
      title: "A Framework for cross account access",
      subtitle: "some piece I wrote on medium",
      content: {
        type: "medium",
        uri: "https://medium.com/swlh/a-framework-for-configuring-cross-account-access-in-aws-3b94daea1063"
      }
    }
  ],
  projects: [
    {
      title: "Ulysess Companion",
      description: "A companion app for reading Jame Joyce's modern classic",
      content: {
       	uri: "https://camin.xyz/ulysess-companion",
	      badges: []
     	}  	
    }
  ]
}