import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manage_areasCreateManyInput } from '../manage-areas/manage-areas-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManymanageAreasArgs {

    @Field(() => [manage_areasCreateManyInput], {nullable:false})
    @Type(() => manage_areasCreateManyInput)
    data!: Array<manage_areasCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
