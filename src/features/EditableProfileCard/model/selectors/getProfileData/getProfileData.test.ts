import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

const data = {
  first: 'Дмитрий',
  lastname: 'Насртдинов',
  age: 31,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Arkhangelsk',
  username: 'admin',
};

describe('getProfileData.test', () => {
  test('should return data ', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
