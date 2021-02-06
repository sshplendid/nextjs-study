import Link from "next/link"
import TestCard from "../components/TestCard"
import scenarios from '../scenarios'
import { Meta } from "../types/mbti"
import s from './index.module.css'

interface OwnProps  {
  list: {key: string, meta: Meta}[]
}

export default ({list}: OwnProps) => {
  return (
    <div>
      <h1 className={s.center}>테스트 리스트</h1>
      <ul>
      {list.map(({meta, key}) => (
        <TestCard 
            key={key}
            url={`/tests/${key}`}
            title={meta.title}
            image={meta.image}
            description={meta.description}
        />
      ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const list = Object.keys(scenarios).map(k => ({
    key: k,
    meta: scenarios[k].meta,
  }))
  return {
    props: {
      list,
    },
  }
}