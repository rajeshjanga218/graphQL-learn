import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import DisplayUsers from "./components/DisplayUsers";
import Movies from "./components/Movies";
import SignUp from "./components/SignUp";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });
  return (
    <ApolloProvider client={client}>
      {/* <DisplayUsers /> */}
      {/* <Movies /> */}
      <SignUp />
    </ApolloProvider>
  );
}

export default App;
