import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import ButtonBase from '@mui/material/ButtonBase';



const ArticleCard = (props) => {
  const {
    article
  } = props
  
  const router = useRouter();

  return (
    <ButtonBase onClick={() =>router.push(`/Article/${article.articleId}`)}>
      <Card
        elevation={3}
        sx={{
          width: "80%",
          marginBottom: "20px"
        }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'secondary.main' }} aria-label="recipe">
              A
            </Avatar>
          }
          title={article.articleAuthor}
          subheader="Month 00, 0000"
        />
        <CardMedia
          component="img"
          height="194"
          src="/images/background.jpg"
          alt="Article Background"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {article.articleTitle}
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
}
export default ArticleCard;