import { Container, Box, Grid, Typography, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import EastIcon from '@mui/icons-material/East'

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
    <Box
      className='section'
      id='news'
      sx={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url(/images/bg/news.png)' }}
    >
      <Container>
        <Box display={'flex'} justifyContent={'space-between'} mb={{ lg: 15, xs: 8 }}>
          <Typography variant='h1' component='h2'>
            <span className='section__heading-icon section__heading-icon--right'>latest News</span>
          </Typography>
          <Box sx={{ display: { xs: 'none', lg: 'block' }, mt: 4 }}>
            <Button href={readAllLink} target='_blank'>
              Read all news
            </Button>
          </Box>
        </Box>
        <Grid container spacing={{ xs: 6, lg: 10 }}>
          {items.map((item, i) => {
            const image = findImage(item.content)
            const description = findDescription(item.content)

            return (
              <Grid key={i} item lg={4} md={6}>
                <Box sx={{ backgroundColor: 'dark.main', padding: 5, borderRadius: 2, height: '100%' }}>
                  <Box
                    sx={{
                      mb: 5,
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        display: 'block',
                        pt: '60%',
                      },
                    }}
                  >
                    <Image
                      src={image}
                      width={0}
                      height={0}
                      sizes='100vw'
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      alt=''
                    />
                  </Box>
                  <Box sx={{ mb: 5, fontSize: 14 }}>
                    <CalendarTodayIcon
                      fontSize='small'
                      sx={{ mr: 2, position: 'relative', verticalAlign: 'middle', top: -2 }}
                    />
                    {item.pubDate}
                  </Box>
                  <Typography
                    variant='h3'
                    fontSize={'28px'}
                    fontWeight={500}
                    display={'block'}
                    component='h3'
                    sx={{ textTransform: 'uppercase', lineHeight: 1.2 }}
                  >
                    {item.title}
                  </Typography>
                  <Box sx={{ fontSize: { xs: 14, lg: 16 }, mt: 3 }}>
                    <p>{description}</p>
                  </Box>
                  <Box sx={{ mt: 11 }}>
                    <Box
                      component={Link}
                      href={readAllLink}
                      target='_blank'
                      sx={{
                        color: 'secondary.main',
                        textDecoration: 'underline',
                        fontSize: { lg: 18, xs: 20 },
                        textTransform: 'uppercase',
                        fontWeight: 500,
                        '&:hover .news-icon': {
                          right: '-5px',
                        },
                      }}
                    >
                      READ MORE
                      <EastIcon
                        sx={{
                          ml: 2,
                          position: 'relative',
                          top: 5,
                          right: 0,
                          transition: 'right .3s',
                        }}
                        className='news-icon'
                      />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            )
          })}
        </Grid>
        <Box mt={10} textAlign={'center'} display={{ lg: 'none' }}>
          <Box
            component={Link}
            href={readAllLink}
            fontSize={20}
            color={'primary.main'}
            sx={{ textDecoration: 'underline' }}
          >
            Read all news
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
