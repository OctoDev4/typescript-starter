import { Module } from '@nestjs/common';
import { CreateAccountController } from '@/infra/http/controllers/create-account.controller';
import { AuthenticateController } from '@/infra/http/controllers/authenticate.controller';
import { CreateQuestionController } from '@/infra/http/controllers/create-question.controller';
import { FetchRecentQuestionsController } from '@/infra/http/controllers/fetch-recents-questions.controller';
import { DatabaseModule } from '@/infra/database/database.module';
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question';
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recent-questions';
import { RegisterStudentUseCase } from '@/domain/forum/application/use-cases/register-student';
import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-cases/authenticate-student';
import { CryptographyModule } from '@/infra/cryptography/cryptography.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '@/infra/auth/jwt-auth.guard';
import { GetQuestionBySlugController } from '@/infra/http/controllers/get-question-by-slug.controller';
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/get-question-by-slug';

@Module({
  imports:[DatabaseModule,CryptographyModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
    GetQuestionBySlugController
  ],
  providers: [
    CreateQuestionUseCase,
    FetchRecentQuestionsUseCase,
    RegisterStudentUseCase,
    AuthenticateStudentUseCase,
    GetQuestionBySlugUseCase

  ]
})
export class HttpModule {}
