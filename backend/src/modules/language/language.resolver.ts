import { Resolver, Query } from '@nestjs/graphql';
import { LanguageOutput } from './model/language.output';
import { LanguageService } from './language.service';

@Resolver(LanguageOutput)
export class LanguageResolver {

  constructor(private languageService: LanguageService) {
  }

  @Query(returns => [LanguageOutput], { name: 'languages' })
  async getLanguages(): Promise<LanguageOutput[]> {
    return this.languageService.getAll();
  }
}
