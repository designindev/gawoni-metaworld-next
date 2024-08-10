import { Box, BoxProps } from '@mui/material'

export const Section = ({ first, ...rest }: BoxProps & { first?: boolean }) => {
  return (
    <Box
      component={'section'}
      pt={25}
      pb={25}
      {...rest}
      sx={[first && { mt: { md: '-85px', xs: '-60px' } }, ...(Array.isArray(rest.sx) ? rest.sx : [rest.sx])]}
    />
  )
}
