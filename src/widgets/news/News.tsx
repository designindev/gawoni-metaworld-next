import { Container, Box, Grid, Typography, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

const findImage = (body: string) => {
  const imgRegex = /<img.*?src="(.*?)"/
  const imgSrc = body.match(imgRegex)
  return imgSrc ? imgSrc[1] : ''
}

const findDescription = (body: string) => {
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/
  const p = body.match(pRegex)
  return p ? p[1] : ''
}

const readAllLink = 'https://medium.com/@gawooni'

export const News = async () => {
  const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gawooni', {})
  const data = await response.json()
  const items = data.items.slice(0, 3) as any[]

  return (
    <Box className='section s-news' id='news' sx={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url(/images/bg/news.png)' }}>
      <Container className='s-news__container news'>
        <div className='section__heading-wrapper'>
          <Typography variant='sectionTitle' component='h2'>
            <span className='section__heading-icon section__heading-icon--right'>latest News</span>
          </Typography>
          <Box sx={{ display: { xs: 'none', lg: 'block' } }} className='section__heading-btn'>
            <Button href={readAllLink} target='_blank'>
              Read all news
            </Button>
          </Box>
        </div>
        <Grid container spacing={{ xs: 6, lg: 10 }} className='items news__items'>
          {items.map((item, i) => {
            const image = findImage(item.content)
            const description = findDescription(item.content)

            return (
              <Grid key={i} item lg={4} md={6}>
                <Box sx={{ backgroundColor: 'dark.main', padding: 5, borderRadius: 2, height: '100%' }}>
                  <Box sx={{ mb: 5, height: '250px', position: 'relative' }}>
                    <Image
                      src={image}
                      width={0}
                      height={0}
                      sizes='100vw'
                      style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
                      alt=''
                    />
                  </Box>
                  <Box sx={{ mb: 5, fontSize: 14 }} className='news__items-date'>
                    <CalendarTodayIcon fontSize='small' sx={{ mr: 2, position: 'relative', top: -1 }} />
                    {item.pubDate}
                  </Box>
                  <Typography variant='h3' fontSize={'28px'} display={'block'} component='h3' sx={{ textTransform: 'uppercase', lineHeight: 1.2 }}>
                    {item.title}
                  </Typography>
                  <Box sx={{ fontSize: { xs: 14, lg: 16 }, mt: 3 }}>
                    <p>{description}</p>
                  </Box>
                  <Box sx={{ mt: 11 }}>
                    <Link href={readAllLink} target='_blank' className='text-link text-link--arrow text-secondary'>
                      READ MORE
                    </Link>
                  </Box>
                </Box>
              </Grid>
            )
          })}
        </Grid>
        <Box mt={10} textAlign={'center'}>
          <Link href={readAllLink} className='text-link text-primary fz-20'>
            Read all news
          </Link>
        </Box>
      </Container>
    </Box>
  )
}
