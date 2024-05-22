import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EmployeesCount {

    @Field(() => Int, {nullable:false})
    customers!: number;
}
