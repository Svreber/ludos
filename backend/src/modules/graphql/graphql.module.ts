import { TypeGraphQLModule, SchemaBuilder } from 'nest-type-graphql';
import { Module, OnModuleInit } from '@nestjs/common';
import { ApplicationReferenceHost } from '@nestjs/core';
import { ApolloServer } from 'apollo-server-express';

// Copied from https://github.com/mohaalak/nestjs_typegraphql
// Waiting for an official integration between NestJs and Type GraphQL
// Follow: https://github.com/19majkel94/type-graphql/issues/135

@Module({
  imports: [TypeGraphQLModule],
})
export class ApolloModule implements OnModuleInit {
  apolloServer: ApolloServer;

  constructor(
    private readonly appRefHost: ApplicationReferenceHost,
    private readonly graphQLFactory: SchemaBuilder,
  ) {}
  
  async onModuleInit() {
    if (!this.appRefHost) {
      return;
    }

    const httpServer = this.appRefHost.applicationRef;
    if (!httpServer) {
      return;
    }

    const app = httpServer.getInstance();
    const schema = await this.graphQLFactory.build({
      emitSchemaFile: true,
      resolvers: []
    });

    this.apolloServer = new ApolloServer({
      schema,
      context: ({ req }: any) => ({ req }),
      playground: true,
    });
    this.apolloServer.applyMiddleware({
      app,
    });
  }
}