// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/express-graphql/index.d.ts#L105
export interface GraphQLParams {
    query: string | null | undefined;
    variables: { [name: string]: any } | null | undefined;
    operationName: string | null | undefined;
}
