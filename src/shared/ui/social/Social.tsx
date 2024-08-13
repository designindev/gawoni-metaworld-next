import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Soc1 from 'shared/images/socials/discord.png'
import Soc2 from 'shared/images/socials/x.png'
import Soc3 from 'shared/images/socials/tg.png'
import Soc4 from 'shared/images/socials/medium.png'
import { Box, Stack } from '@mui/material'

type SocialName = 'discord' | 'x' | 'tg' | 'medium'

type Props = {
  hidden?: Partial<Record<SocialName, boolean>>
}

const items: { image: StaticImageData; name: SocialName }[] = [
  { image: Soc1, name: 'discord' },
  { image: Soc2, name: 'x' },
  { image: Soc3, name: 'tg' },
  { image: Soc4, name: 'medium' },
]

export const Social = (props: Props) => {
  const { hidden = {} } = props

  return (
    <Stack direction='row' display={'inline-flex'} spacing={5} component={'ul'}>
      {items
        .filter((el) => !(hidden[el.name] === true))
        .map((el) => [
          <Box component={'li'} height={40} width={40} lineHeight={'40px'} textAlign={'center'} key={el.name}>
            <Box
              component={Link}
              href='#'
              display={'inline-block'}
              sx={{
                transition: 'filter .3s',
                '&:hover': {
                  filter: 'drop-shadow(0 0 3px #fff);',
                },
              }}
            >
              <Image src={el.image} alt='Social logo' priority style={{ verticalAlign: 'middle' }} />
            </Box>
          </Box>,
        ])}
    </Stack>
  )
}
