/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCanditate = /* GraphQL */ `
  mutation CreateCanditate(
    $input: CreateCanditateInput!
    $condition: ModelCanditateConditionInput
  ) {
    createCanditate(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateCanditate = /* GraphQL */ `
  mutation UpdateCanditate(
    $input: UpdateCanditateInput!
    $condition: ModelCanditateConditionInput
  ) {
    updateCanditate(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteCanditate = /* GraphQL */ `
  mutation DeleteCanditate(
    $input: DeleteCanditateInput!
    $condition: ModelCanditateConditionInput
  ) {
    deleteCanditate(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
