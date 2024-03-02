import { createSchema, createYoga } from "graphql-yoga"
import type { NextApiRequest, NextApiResponse } from "next"
import { resolvers } from "../../../../graphql/resolvers"
import { schema } from "../../../../graphql/schema"

// const schema = createSchema({
//   typeDefs,
//   resolvers
// })

const { handleRequest } = createYoga({
  graphqlEndpoint: "/api/graphql",
  schema,
  fetchAPI: {
    Request: Request,
    Response: Response
  }
})

export { handleRequest as GET, handleRequest as POST }
