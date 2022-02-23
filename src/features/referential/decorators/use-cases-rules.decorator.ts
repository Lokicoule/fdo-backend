import { applyDecorators } from '@nestjs/common';
import { UniqueKeyRule } from 'src/features/referential/decorators/unique-key.decorator';
import { UseCaseCounterRule } from 'src/features/referential/decorators/use-case-counter.decorator';
import { UseCaseLiteralExpressionRule } from 'src/features/referential/decorators/use-case-literal-expression.decorator';
import { UseCaseYearRule } from 'src/features/referential/decorators/use-case-year.decorator';

export function UseCasesRules() {
  return applyDecorators(
    UniqueKeyRule(),
    UseCaseCounterRule(),
    UseCaseYearRule(),
    UseCaseLiteralExpressionRule(),
  );
}
