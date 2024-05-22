import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { areasWhereUniqueInput } from './areas-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueareasOrThrowArgs {

    @Field(() => areasWhereUniqueInput, {nullable:false})
    @Type(() => areasWhereUniqueInput)
    where!: Prisma.AtLeast<areasWhereUniqueInput, 'id'>;
}
