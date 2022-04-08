// Utility to match GraphQL mutation based on the operation name
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hasOperationName = (req: any, operationName: string) => {
  const { body } = req;
  return body.hasOwnProperty('operationName') && body.operationName === operationName;
};

// Alias query if operationName matches
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const aliasQuery = (req: any, operationName: string) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Query`;
  }
};

// Alias mutation if operationName matches
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const aliasMutation = (req: any, operationName: string) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Mutation`;
  }
};
