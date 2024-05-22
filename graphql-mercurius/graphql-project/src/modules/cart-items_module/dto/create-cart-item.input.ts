import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCartItemInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
