import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core"

import s  from './testCard.module.css'

interface OwnProps {
  type: string
  title: string
  description: string
  imageUrl: string
  retryUrl: string
  anotherUrl: string
}
export default ({title, description, type, imageUrl, retryUrl, anotherUrl}) => {
  return  (
    <Card>
        <CardMedia className={s.characterImage} image={imageUrl}
                  title={title}
                  />
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="h2">
            { description }
          </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          공유하기
        </Button>
        <Button href={retryUrl} size="small" color="primary">
          다시하기
        </Button>
        <Button href={anotherUrl} size="small" color="primary">
          다른 테스트 보기
        </Button>

      </CardActions>
    </Card>
  )
}