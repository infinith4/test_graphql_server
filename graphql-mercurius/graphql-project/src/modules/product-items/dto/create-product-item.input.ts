import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductItemInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
