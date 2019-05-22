import { Query, Resolver } from '@nestjs/graphql';
import { LanguageOutput } from './domain/language.output';
import { LanguageService } from './language.service';
import { OnModuleInit } from '@nestjs/common';

@Resolver(LanguageOutput)
export class LanguageResolver implements OnModuleInit {

  constructor(private languageService: LanguageService) {
  }

  async onModuleInit(): Promise<void>  {
    await this.languageService.createDefaultIfEmpty();
  }

  /**
   * Queries 
   */

  @Query(returns => [LanguageOutput], { name: 'languages' })
  async getLanguages(): Promise<LanguageOutput[]> {
    return this.languageService.getAll();
  }
}
