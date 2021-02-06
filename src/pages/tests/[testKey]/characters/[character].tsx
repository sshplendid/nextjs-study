import  Link  from  'next/link'
import CharacterCard from '../../../../components/CharacterCard'
import scenarios  from '../../../../scenarios'

interface OwnProps {
  type: string
  title: string
  description: string
  testKey: string
}

export default ({testKey, title, type, description}: OwnProps) => {
  return (
    <div>
      <CharacterCard 
      {...{type, description, title}}
      imageUrl={`/nextjs-study/images/${testKey}/${type.toUpperCase()}.jpg`}
      retryUrl={`/nextjs-study/tests/${testKey}`}
      anotherUrl='/nextjs-study'
      />
    </div>
  )
}

export async function getStaticPaths() {
  const paths = Object.keys(scenarios)
  .flatMap(testKey =>  {
    const characters = Object.keys(scenarios[testKey].result)
    return characters.map(character => ({ params: {testKey, character}}))
  })
  
  return { paths, fallback: false}
}

export async function getStaticProps({params}) {
  const { testKey, character } = params
  return { 
    props: {
      ...scenarios[testKey].result[character],
      testKey,
    }
  }
}