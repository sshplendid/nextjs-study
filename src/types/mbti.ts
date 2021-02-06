export enum QuestionTarget {
  EI =  'EI',
  SN = 'SN',
  TF  = 'TF',
  JP = 'JP',
}

export interface  QuestionType {
  question: string
  leftAnswer: string
  rightAnswer: string
  type: QuestionTarget
}

export enum  Personality {
  ISTJ = 'ISTJ',
  ISFJ = 'ISFJ',
  INFJ = 'INFJ',
  INTJ = 'INTJ',
  ISTP = 'ISTP',
  ISFP = 'ISFP',
  INFP = 'INFP',
  INTP = 'INTP',
  ESTP = 'ESTP',
  ESFP = 'ESFP',
  ENFP = 'ENFP',
  ENTP = 'ENTP',
  ESTJ = 'ESTJ',
  ESFJ = 'ESFJ',
  ENFJ = 'ENFJ',
  ENTJ = 'ENTJ',
}

export interface PersonalityResult {
  type: Personality
  title: string
  description: string
}

export interface TestType {
  title: string
  testImage: string
  testDescription: string
  meta: Meta
  questions: QuestionType[]
  result: {[key: string]: PersonalityResult}
}

export interface Meta {
  title: string
  image: string
  description: string
}