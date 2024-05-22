import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Manage_areasMinAggregate {

    @Field(() => Int, {nullable:true})
    area_id?: number;

    @Field(() => Int, {nullable:true})
    employee_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
