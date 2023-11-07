import { Profile } from 'entities/Profile';
import { ValidateProfileError } from '../../types/profileSchema';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }
  const { first, lastname, age } = profile;
  const errors: Array<ValidateProfileError> = [];

  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }
  return errors;
};
