import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core"

import s  from './testCard.module.css'

export default ({title, description, image, url}) => {
  return  (
    <Card className={s.card}>
      <CardActionArea href={url}>
        <CardMedia className={s.cardImage} image={image} title={title} />
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="h2">
            { description }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}