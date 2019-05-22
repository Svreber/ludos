import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { LanguageConverter } from './domain/language.converter';
import { LanguageResolver } from './language.resolver';
import { LanguageService } from './language.service';

@Module({
  providers: [LanguageConverter, LanguageService, LanguageResolver],
  imports: [InfrastructureModule],
  exports: [LanguageConverter]
})
export class LanguageModule { }
