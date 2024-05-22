import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AreasCount {

    @Field(() => Int, {nullable:false})
    manage_areas!: number;
}
