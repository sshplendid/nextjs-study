import { useState } from "react"
import Link from 'next/link'
import Question from "../../../components/Question"
import { QuestionTarget, QuestionType } from "../../../types/mbti"
import scenarios from "../../../scenarios"
import Head from 'next/head'
import s from './test.module.css'
import TestCard from "../../../components/TestCard"

interface OwnProps {
  testId: string
  questions: QuestionType[]
  testTitle: string
}

export default ({testId, testTitle, questions}: OwnProps) => {
  const [phase, setPhase] = useState<number>(0)
  const [ei, setEi] = useState<number>(0)
  const [sn, setSn] = useState<number>(0)
  const [tf, setTf] = useState<number>(0)
  const [jp, setJp] = useState<number>(0)

  const handleMbti = (type: QuestionTarget) => (isLeft: boolean) => {
    const getHandler = (): [number, (n: number) => void] =>  {
      switch (type) {
        case QuestionTarget.EI: 
        return [ei,  setEi]
        case QuestionTarget.SN:
        return [sn, setSn]
        case QuestionTarget.TF:
        return [tf, setTf];
        case QuestionTarget.JP:
        return [jp, setJp]
      }
    }
    
    const [score, handler] = getHandler()
    isLeft?handler(score+1):handler(score-1)
    setPhase(phase+1)
  }

  return (
    <div>
      <Head>
        <title>{testTitle} : 킬링타임</title>
      </Head>
      <h4>
        {testTitle} {phase < questions.length &&  `${phase + 1}/${questions.length}`}
      </h4>
      {phase < questions.length ? (
        <Question 
          {...questions[phase]}
          onClickAnswer={handleMbti}
        />
        ): (
          <div>
            <TestCard title="결과 보러가기"
                    image="https://www.iwu.edu/center-engaged-learning/titan-central/ask/questions-graphic.png"
                    description="나와 어울리는 동물은??"
                    url={`/tests/${testId}/characters/${resolveMbti(ei,sn,tf,jp)}`}
                    />
          </div>
        )
      }
      <progress className={s.full} max={questions.length} value={phase} />
    </div>
  )
}

export async function getStaticPaths() {
  const paths= Object.keys(scenarios).map(key => ({params: {testKey: key}}))
  console.log(paths)
  return { paths, fallback: false}
}

export async function  getStaticProps({params})  {
  const key =  params.testKey
  return { props: {
    testId:  key,
    questions: scenarios[key].questions,
    testTitle: scenarios[key].title,
       }
  }
}
    
const resolveMbti = (ei: number, sn: number, tf: number, jp: number): string => {
  let result = ''
  result += ei>0?'e':'i'
  result += sn>0?'s':'n'
  result += tf>0?'t':'f'
  result += jp>0?'j':'p'

  return result
}
