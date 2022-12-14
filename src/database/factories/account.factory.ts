import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Account } from '../entities/account.entity';

define(Account, (faker: typeof Faker) => {
  const account = new Account();
  account.id = faker.datatype.uuid();
  account.name = faker.internet.userName();
  account.email = faker.internet.email();
  account.password = faker.internet.password();
  return account;
});
