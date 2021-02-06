import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core"
import Link from "next/link"

import s  from './testCard.module.css'
interface OwnProps {
  title: string
  description: string
  image: string
  url?: string
}

export default ({title, description, image, url}) => {
  return  (
    <Card className={s.card}>
      <Link href={url} passHref>
        <CardActionArea>
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
      </Link>
    </Card>
  )
}