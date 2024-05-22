import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { areasWhereInput } from '../areas/areas-where.input';

@InputType()
export class AreasRelationFilter {

    @Field(() => areasWhereInput, {nullable:true})
    is?: areasWhereInput;

    @Field(() => areasWhereInput, {nullable:true})
    isNot?: areasWhereInput;
}
