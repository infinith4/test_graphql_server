import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class manage_areasArea_idEmployee_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    area_id!: number;

    @Field(() => Int, {nullable:false})
    employee_id!: number;
}
