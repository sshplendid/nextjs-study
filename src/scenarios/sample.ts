import { Meta, Personality, QuestionTarget, QuestionType } from "../types/mbti";

export const title = '샘플 테스트'
export const testImage = 'https://i.etsystatic.com/5836272/r/il/d6512f/790933208/il_570xN.790933208_500u.jpg'
export const testDescription = '이 테스트는 여러가지 질문을 통해 자신과 가장 어울리는 샘플을 찾아요. '
export const meta: Meta = {
  title,
  image: testImage,
  description: testDescription,
}
export const questions: QuestionType[] = [
  {
    question: '1 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: QuestionTarget.EI,
  },
  {
    question: '2 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: QuestionTarget.SN,
  },
  {
    question: '3 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: QuestionTarget.TF,
  },
  {
    question: '4 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: QuestionTarget.JP,
  },
  {
    question: '1 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: QuestionTarget.EI,
  },
  {
    question: '2 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: QuestionTarget.SN,
  },
  {
    question: '3 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: QuestionTarget.TF,
  },
  {
    question: '4 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: QuestionTarget.JP,
  },
  {
    question: '1 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: QuestionTarget.EI,
  },
  {
    question: '2 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: QuestionTarget.SN,
  },
  {
    question: '3 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: QuestionTarget.TF,
  },
  {
    question: '4 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: QuestionTarget.JP,
  },
]

export const result = {
  estj: {
    title: 'ESTJ',
    type: Personality.ESTJ,
    description: '중얼중얼 당신은 estj..... 길게길게 써본다. 정말 길게 써봐야지. 어디까지 쓸수 있을까. 잘리면 안되는데...  중얼중얼 당신은 estj..... 길게길게 써본다. 정말 길게 써봐야지. 어디까지 쓸수 있을까. 잘리면 안되는데... 중얼중얼 당신은 estj..... 길게길게 써본다. 정말 길게 써봐야지. 어디까지 쓸수 있을까. 잘리면 안되는데... 중얼중얼 당신은 estj..... 길게길게 써본다. 정말 길게 써봐야지. 어디까지 쓸수 있을까. 잘리면 안되는데... 중얼중얼 당신은 estj..... 길게길게 써본다. 정말 길게 써봐야지. 어디까지 쓸수 있을까. 잘리면 안되는데... 중얼중얼 당신은 estj..... 길게길게 써본다. 정말 길게 써봐야지. 어디까지 쓸수 있을까. 잘리면 안되는데... v중얼중얼 당신은 estj..... 길게길게 써본다. 정말 길게 써봐야지. 어디까지 쓸수 있을까. 잘리면 안되는데... 중얼중얼 당신은 estj..... 길게길게 써본다. 정말 길게 써봐야지. 어디까지 쓸수 있을까. 잘리면 안되는데...'
  }, 
  estp: {
   title: 'ESTP',
   type:  Personality.ESTP,
   description: '중얼중얼 당신은 estj.....'
 },
 esfp: {
   title: 'ESFP',
   type:  Personality.ESFP,
   description: '중얼중얼 당신은 estj.....'
 },
 esfj: {
   title: 'ESFJ',
   type:  Personality.ESFJ,
   description: '중얼중얼 당신은 estj.....'
 },
 istj: {
   title: 'ISTJ',
   type:  Personality.ISTJ,
   description: '중얼중얼 당신은 estj.....'
 },
 istp: {
   title: 'ISTP',
   type:  Personality.ISTP,
   description: '중얼중얼 당신은 estj.....'
 },
 isfp: {
   title: 'ISFP',
   type:  Personality.ISFP,
   description: '중얼중얼 당신은 estj.....'
 },
 isfj: {
   title: 'ISFJ',
   type:  Personality.ISFJ,
   description: '중얼중얼 당신은 estj.....'
 },
 intj: {
   title: 'INTJ',
   type:  Personality.INTJ,
   description: '중얼중얼 당신은 estj.....'
 },
 intp: {
   title: 'INTP',
   type:  Personality.INTP,
   description: '중얼중얼 당신은 estj.....'
 },
 infp: {
   title: 'INFP',
   type:  Personality.INFP,
   description: '중얼중얼 당신은 estj.....'
 },
 infj: {
   title: 'INFJ',
   type:  Personality.INFJ,
   description: '중얼중얼 당신은 estj.....'
 },
 entj: {
   title: 'ENTJ',
   type:  Personality.ENTJ,
   description: '중얼중얼 당신은 estj.....'
 },
 entp: {
   title: 'ENTP',
   type:  Personality.ENTP,
   description: '중얼중얼 당신은 estj.....'
 },
 enfp: {
   title: 'ENFP',
   type:  Personality.ENFP,
   description: '중얼중얼 당신은 estj.....'
 },
 enfj: {
   title: 'ENFJ',
   type:  Personality.ENFJ,
   description: '중얼중얼 당신은 estj.....'
 },
}