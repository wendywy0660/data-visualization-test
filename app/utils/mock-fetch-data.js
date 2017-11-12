import sampleData from '../sample-data';

const resolveWith = (data, delay = 0) => (
  new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  })
);

const rejectWith = (error, delay = 0) => (
  new Promise((_, reject) => {
    setTimeout(() => reject(error), delay);
  })
);

export default function mockFetchData({ error = false, delay = 1000, mockData = sampleData } = {}) {
  if (error) return rejectWith(new Error('Fake Error'), delay);
  return resolveWith(mockData, delay);
}
