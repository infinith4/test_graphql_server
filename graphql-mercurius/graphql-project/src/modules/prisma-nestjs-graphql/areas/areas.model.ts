import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { manage_areas } from '../manage-areas/manage-areas.model';
import { AreasCount } from '../prisma/areas-count.output';

@ObjectType()
export class areas {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => Int, {nullable:true})
    employee_id!: number | null;

    @Field(() => [manage_areas], {nullable:true})
    manage_areas?: Array<manage_areas>;

    @Field(() => AreasCount, {nullable:false})
    _count?: AreasCount;
}
