import { isEmpty } from 'lodash';

export function getValue(initValue: string, defaultValue = '') {
  return isEmpty(initValue) ? defaultValue : initValue;
}
