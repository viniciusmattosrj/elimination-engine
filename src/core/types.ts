export type userInfo = {
    minSalary: number;
    maxSalary: number;
    level: string;
    status: string;
    experienceTimeYears: number;
}

export type jobInfo = {
    minPretension: number;
    maxPretension: number;
    level: string;
    experienceTimeYears: number;
}

export type eliminateInput = {
    userInfo: userInfo
    jobInfo: jobInfo;
}
