import { Box, BoxProps } from '@mui/material'

export const Section = ({ first, ...rest }: BoxProps & { first?: boolean }) => {
  return (
    <Box
      component={'section'}
      pt={{ lg: 25, sm: 18, xs: 12 }}
      pb={{ lg: 25, sm: 18, xs: 12 }}
      {...rest}
      sx={[first && { mt: { md: '-85px', xs: '-60px' } }, ...(Array.isArray(rest.sx) ? rest.sx : [rest.sx])]}
    />
  )
}
