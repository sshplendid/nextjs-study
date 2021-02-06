import Head from "next/head"
import Link from "next/link"
import TestCard from "../../../components/TestCard"
import scenarios  from '../../../scenarios'
import { Meta } from "../../../types/mbti"

import s from './index.module.css'

interface OwnProps {
  meta: Meta
  testId: string
}
export default ({meta, testId}: OwnProps) => {
  return (
    <div>
      <Head>
        <title>{meta.title} : 나는 뭘까?</title>
      </Head>
      <h1 className={s.center}>{meta.title}</h1>
      <TestCard 
            key={testId}
            url={`/nextjs-study/tests/${testId}/test`}
            title={'이 테스트는?'}
            image={meta.image}
            description={meta.description}
        />
    </div>
  )
}

export async function getStaticPaths() {
  return { paths: Object.keys(scenarios).map(key => ({params: {testKey: key}})), fallback: false}
}

export async function  getStaticProps({params})  {
  const key =  params.testKey
  return { props: {
    meta: scenarios[key].meta,
    testId: key
   }
  }
}