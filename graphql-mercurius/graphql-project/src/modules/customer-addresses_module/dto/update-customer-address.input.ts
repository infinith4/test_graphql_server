import { CreateCustomerAddressInput } from './create-customer-address.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCustomerAddressInput extends PartialType(CreateCustomerAddressInput) {
  @Field(() => Int)
  id: number;
}
