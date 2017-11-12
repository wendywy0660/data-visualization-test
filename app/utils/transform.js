import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import mapKeys from 'lodash/mapKeys';

export const YEARSMAP = ['2013', '2014'];

function getFilteredDataByYear(data, year) {
  return data.filter(entry => entry.year === year);
}

function getGroupByFeature(data, feature) {
  const groupCat = groupBy(data, 'category');
  return map(groupCat, (entry, key) => {
    const years = mapKeys(
      entry.map(value => value[feature]),
      (value, index) => `year${YEARSMAP[index]}`,
    );
    return {
      ...years,
      name: key,
    };
  });
}

export {
  getFilteredDataByYear,
  getGroupByFeature,
};
