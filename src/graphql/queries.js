/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCanditate = /* GraphQL */ `
  query GetCanditate($id: ID!) {
    getCanditate(id: $id) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const listCanditates = /* GraphQL */ `
  query ListCanditates(
    $filter: ModelCanditateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCanditates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
