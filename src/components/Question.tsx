import { Button, withWidth } from "@material-ui/core"
import { QuestionTarget } from "../types/mbti"

import s from './question.module.css'

interface OwnProps {
  question: string
  leftAnswer: string
  rightAnswer: string
  onClickAnswer: (type: QuestionTarget) => (b: boolean) => void
  type: QuestionTarget
}

export default ({question, leftAnswer, rightAnswer, type, onClickAnswer}: OwnProps) => {
  return (
    <div>
      <h3>{question}</h3>
      <div>
        <div className={s.answer}>
        <Button variant="contained" color="primary" onClick={() => onClickAnswer(type)(true)}>{leftAnswer}</Button>
        </div>
        <div className={s.answer}>
        <Button variant="contained" color="secondary" onClick={() => onClickAnswer(type)(false)}>{rightAnswer}</Button>
        </div>
      </div>
      
    </div>
  )
}