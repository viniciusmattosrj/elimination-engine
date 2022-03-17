/* eslint-disable max-len */
import { eliminateInput } from './types';
import { Logger } from '../logger';

export const verifySalaryInPretension = (minSalary: number, maxSalary: number, minPretension: number, maxPretension: number): boolean => {
  if (minSalary > minPretension) {
    return false;
  }

  if (minSalary >= maxPretension) {
    return false;
  }

  if (maxSalary > maxPretension) {
    return false;
  }

  return true;
};

export const verifyLevel = (userLevel:string, jobLevel:string): boolean => userLevel === jobLevel;

export const verifyExperienceTime = (userExperience:number, jobExperience: number): boolean => userExperience >= jobExperience;

export class Core {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  eliminate = (input: eliminateInput) => {
    const { userInfo, jobInfo } = input;

    const isUserInPretension = verifySalaryInPretension(userInfo.minSalary, userInfo.maxSalary, jobInfo.minPretension, jobInfo.maxPretension);

    if (!isUserInPretension) {
      this.logger.info('Salary range different');
      throw new Error('Salary pretension');
    }

    const isUserInLevel = verifyLevel(userInfo.level, jobInfo.level);

    if (!isUserInLevel) {
      this.logger.info('Level diffent');
      throw new Error('Level');
    }

    const isUserInExperienceTime = verifyExperienceTime(userInfo.experienceTimeYears, jobInfo.experienceTimeYears);

    if (!isUserInExperienceTime) {
      this.logger.info('Experience time diffent');
      throw new Error('Experience time');
    }
  };
}
