import { ThfSelectOption } from '@totvs/thf-ui';

export class NewLeilao{
  'name': string;
  'photo': string;
  'base_price': 'number';
  'bid_type': Array<ThfSelectOption>;
  'bid_step': 'number';
}
