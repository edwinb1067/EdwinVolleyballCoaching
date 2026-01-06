
export enum SkillLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced'
}

export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    value: number;
  }[];
}

export interface QuizResult {
  level: SkillLevel;
  score: number;
}
