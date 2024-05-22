import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Manage_areasSumAggregate {

    @Field(() => Int, {nullable:true})
    area_id?: number;

    @Field(() => Int, {nullable:true})
    employee_id?: number;
}
