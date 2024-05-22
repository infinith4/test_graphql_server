import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cartsScalarWhereInput } from './carts-scalar-where.input';
import { Type } from 'class-transformer';
import { cartsUpdateManyMutationInput } from './carts-update-many-mutation.input';

@InputType()
export class cartsUpdateManyWithWhereWithoutUsersInput {

    @Field(() => cartsScalarWhereInput, {nullable:false})
    @Type(() => cartsScalarWhereInput)
    where!: cartsScalarWhereInput;

    @Field(() => cartsUpdateManyMutationInput, {nullable:false})
    @Type(() => cartsUpdateManyMutationInput)
    data!: cartsUpdateManyMutationInput;
}
