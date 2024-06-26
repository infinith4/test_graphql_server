import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { customersWhereUniqueInput } from './customers-where-unique.input';
import { Type } from 'class-transformer';
import { customersCreateInput } from './customers-create.input';
import { customersUpdateInput } from './customers-update.input';

@ArgsType()
export class UpsertOnecustomersArgs {

    @Field(() => customersWhereUniqueInput, {nullable:false})
    @Type(() => customersWhereUniqueInput)
    where!: Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => customersCreateInput, {nullable:false})
    @Type(() => customersCreateInput)
    create!: customersCreateInput;

    @Field(() => customersUpdateInput, {nullable:false})
    @Type(() => customersUpdateInput)
    update!: customersUpdateInput;
}
