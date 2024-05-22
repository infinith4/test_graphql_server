import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PaymentsService } from './payments.service';
import { payments } from './entities/payment.entity';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';

@Resolver(() => payments)
export class PaymentsResolver {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Mutation(() => payments)
  createPayment(@Args('createPaymentInput') createPaymentInput: CreatePaymentInput) {
    return this.paymentsService.create(createPaymentInput);
  }

  @Query(() => [payments], { name: 'payments' })
  findAll() {
    return this.paymentsService.findAll();
  }

  @Query(() => payments, { name: 'payment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.paymentsService.findOne(id);
  }

  @Mutation(() => payments)
  updatePayment(@Args('updatePaymentInput') updatePaymentInput: UpdatePaymentInput) {
    return this.paymentsService.update(updatePaymentInput.id, updatePaymentInput);
  }

  @Mutation(() => payments)
  removePayment(@Args('id', { type: () => Int }) id: number) {
    return this.paymentsService.remove(id);
  }
}
