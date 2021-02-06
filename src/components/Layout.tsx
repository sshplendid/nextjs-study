import { Container } from "@material-ui/core"
interface OwnProps {
  children: JSX.Element
}

export default ({children}: OwnProps) => {
  return (
    <Container maxWidth="sm">
      {children}
    </Container>
  )
}