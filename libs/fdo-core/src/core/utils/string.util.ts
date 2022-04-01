import { isEmpty } from 'lodash';

export function getValue(initValue: string, defaultValue = '') {
  return isEmpty(initValue) ? defaultValue : initValue;
}

export function incrementStringNumberWithLeadingZero(
  value: string,
  increment: number,
) {
  let result = '';
  const incrementedValueStr = (parseInt(value) + increment).toString();
  const nbLeadingZero = value.length - incrementedValueStr.length;
  if (nbLeadingZero > 0) {
    for (let i = 0; i < nbLeadingZero; i++) {
      result += '0';
    }
  }
  return (result += incrementedValueStr);
}
