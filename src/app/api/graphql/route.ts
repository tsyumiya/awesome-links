import { createSchema, createYoga } from "graphql-yoga"
import { schema } from "../../../../graphql/schema"
import { createContext } from "../../context/graphql-context"

// const schema = createSchema({
//   typeDefs,
//   resolvers
// })

const { handleRequest } = createYoga({
  graphqlEndpoint: "/api/graphql",
  schema,
  context: createContext,
  fetchAPI: {
    Request: Request,
    Response: Response
  }
})

export { handleRequest as GET, handleRequest as POST }
