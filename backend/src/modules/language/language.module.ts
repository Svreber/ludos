import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageResolver } from './language.resolver';

@Module({
  providers: [LanguageService, LanguageResolver],
  imports: [InfrastructureModule]
})
export class LanguageModule { }
