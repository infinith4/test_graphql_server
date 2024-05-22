import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { areasUpdateManyMutationInput } from './areas-update-many-mutation.input';
import { Type } from 'class-transformer';
import { areasWhereInput } from './areas-where.input';

@ArgsType()
export class UpdateManyareasArgs {

    @Field(() => areasUpdateManyMutationInput, {nullable:false})
    @Type(() => areasUpdateManyMutationInput)
    data!: areasUpdateManyMutationInput;

    @Field(() => areasWhereInput, {nullable:true})
    @Type(() => areasWhereInput)
    where?: areasWhereInput;
}
