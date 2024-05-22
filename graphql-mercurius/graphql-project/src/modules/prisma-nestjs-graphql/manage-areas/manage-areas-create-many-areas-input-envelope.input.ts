import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manage_areasCreateManyAreasInput } from './manage-areas-create-many-areas.input';
import { Type } from 'class-transformer';

@InputType()
export class manage_areasCreateManyAreasInputEnvelope {

    @Field(() => [manage_areasCreateManyAreasInput], {nullable:false})
    @Type(() => manage_areasCreateManyAreasInput)
    data!: Array<manage_areasCreateManyAreasInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
