import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { articles_status } from './articles-status.enum';

@InputType()
export class NullableEnumarticles_statusFieldUpdateOperationsInput {

    @Field(() => articles_status, {nullable:true})
    set?: keyof typeof articles_status;
}
