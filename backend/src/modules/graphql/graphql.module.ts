import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
      // If you display this exception field it may leak some internal information
      // formatError: error => {
      //   delete error.extensions.exception;
      //   return error;
      // },
    }),
  ]
})
export class GraphqlModule {
}
