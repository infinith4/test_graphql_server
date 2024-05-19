import { CreateProductItemInput } from './create-product-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductItemInput extends PartialType(CreateProductItemInput) {
  @Field(() => Int)
  id: number;
}
