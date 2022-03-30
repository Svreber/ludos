// https://github.com/graphql/express-graphql/blob/main/src/index.ts
export interface GraphQLParams {
    query: string | null;
    variables: { readonly [name: string]: unknown } | null;
    operationName: string | null;
    raw: boolean;
}