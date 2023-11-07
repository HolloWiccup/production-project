import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

const data = {
  first: 'Дмитрий',
  lastname: 'Насртдинов',
  age: 31,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Arkhangelsk',
  username: 'admin',
};

describe('getProfileForm.test', () => {
  test('should return from ', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should work with empty error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
