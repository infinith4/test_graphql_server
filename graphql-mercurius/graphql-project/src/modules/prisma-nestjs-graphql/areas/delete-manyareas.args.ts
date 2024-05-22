import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { areasWhereInput } from './areas-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyareasArgs {

    @Field(() => areasWhereInput, {nullable:true})
    @Type(() => areasWhereInput)
    where?: areasWhereInput;
}
