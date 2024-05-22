import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerAddressInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
