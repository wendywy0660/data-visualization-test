import numeral from 'numeral';

export const unformatNumber = number => numeral(number).value();
export const dollarFormatter = number => numeral(number).format('$0,0');
