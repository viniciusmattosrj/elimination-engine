import { verifyExperienceTime, verifyLevel, verifySalaryInPretension } from '.';

test('should be salary in not pretension', () => {
  const minSalary = 10000;
  const maxSalary = 20000;
  const minPretension = 5000;
  const maxPretension = 10000;

  const isValid = verifySalaryInPretension(minSalary, maxSalary, minPretension, maxPretension);

  expect(isValid).toEqual(false);
});

test('should be salary in pretension', () => {
  const minSalary = 5000;
  const maxSalary = 10000;
  const minPretension = 10000;
  const maxPretension = 20000;

  const isValid = verifySalaryInPretension(minSalary, maxSalary, minPretension, maxPretension);

  expect(isValid).toEqual(true);
});

test('should be max salary in not pretension', () => {
  const minSalary = 5000;
  const maxSalary = 20000;
  const minPretension = 10000;
  const maxPretension = 15000;

  const isValid = verifySalaryInPretension(minSalary, maxSalary, minPretension, maxPretension);

  expect(isValid).toEqual(false);
});

test('should be level experience', () => {
  const userLevel = 'Pleno';
  const jobLevel = 'Pleno';

  const isValid = verifyLevel(userLevel, jobLevel);

  expect(isValid).toEqual(true);
});

test('should be level not experience', () => {
  const userLevel = 'Junior';
  const jobLevel = 'Pleno';

  const isValid = verifyLevel(userLevel, jobLevel);

  expect(isValid).toEqual(false);
});

test('should be level not experience', () => {
  const userTime = 4;
  const jobTime = 5;

  const isValid = verifyExperienceTime(userTime, jobTime);

  expect(isValid).toEqual(false);
});

test('should be level not experience', () => {
  const userTime = 5;
  const jobTime = 5;

  const isValid = verifyExperienceTime(userTime, jobTime);

  expect(isValid).toEqual(true);
});

test('should be level not experience', () => {
  const userTime = 6;
  const jobTime = 5;

  const isValid = verifyExperienceTime(userTime, jobTime);

  expect(isValid).toEqual(true);
});
