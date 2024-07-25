import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import DisplayUsers from "./components/DisplayUsers";
import Movies from "./components/Movies";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });
  return (
    <ApolloProvider client={client}>
      {/* <DisplayUsers /> */}
      <Movies />
    </ApolloProvider>
  );
}

export default App;
