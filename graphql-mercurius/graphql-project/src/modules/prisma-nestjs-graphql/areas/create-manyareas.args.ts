import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { areasCreateManyInput } from './areas-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyareasArgs {

    @Field(() => [areasCreateManyInput], {nullable:false})
    @Type(() => areasCreateManyInput)
    data!: Array<areasCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
