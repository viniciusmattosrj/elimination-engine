import { Log } from '../logger';
import { Core } from '../core';
import { eliminateInput, userInfo, jobInfo } from '../core/types';

const createEliminateInput = (event): eliminateInput => {
  const user: userInfo = {
    experienceTimeYears: event.body.experienceTimeYears,
    level: event.body.level,
    maxSalary: event.body.maxSalary,
    minSalary: event.body.minSalary,
    status: event.body.status,
  };

  const job: jobInfo = {
    experienceTimeYears: event.body.jobExperienceTime,
    level: event.body.jobLevel,
    maxPretension: event.body.jobMaxPretension,
    minPretension: event.body.jobMinPretension,
  };

  return {
    userInfo: user,
    jobInfo: job,
  };
};

const Handler = (event, core: Core, log) => {
  log.info('Starting Handler');

  const input = createEliminateInput(event);
  core.eliminate(input);
};

export const handler = (event, context) => {
  const log = new Log();

  log.info('Starting');

  const core = new Core(log);

  try {
    Handler(event, core, log);
  } catch (error) {
    log.error('Error');

    return {
      statusCode: 400,
      body: JSON.stringify({ message: `User eliminated by: ${error.message}` }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  log.info('Finishing');

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'User not eliminated' }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
