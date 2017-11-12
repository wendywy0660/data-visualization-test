import { getFilteredDataByYear, getGroupByFeature } from '../../app/utils/transform';

describe('transform helper', () => {
  const sample = [
    { category: 'Parking offence', pn: 72362, face: 8136122, year: '2013' },
    { category: 'Fare Evasion/False Information', pn: 69705, face: 13038900, year: '2013' },
    { category: 'Parking offence', pn: 91891, face: 9297100, year: '2014' },
    { category: 'Fare Evasion/False Information', pn: 69705, face: 13038900, year: '2014' }];

  describe('getFilteredDataByYear', () => {
    it('should get c filtered data', () => {
      expect(getFilteredDataByYear(sample, '2013')).toEqual([
        { category: 'Parking offence', face: 8136122, pn: 72362, year: '2013' },
        { category: 'Fare Evasion/False Information', face: 13038900, pn: 69705, year: '2013' },
      ]);
    });
  });

  describe('getGroupByFeature', () => {
    it('should get right grouped data', () => {
      expect(getGroupByFeature(sample, 'pn')).toEqual([
        { name: 'Parking offence', year2013: 72362, year2014: 91891 },
        { name: 'Fare Evasion/False Information', year2013: 69705, year2014: 69705 },
      ]);
    });
  });
});
