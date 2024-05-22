import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Manage_areasAvgAggregate {

    @Field(() => Float, {nullable:true})
    area_id?: number;

    @Field(() => Float, {nullable:true})
    employee_id?: number;
}
