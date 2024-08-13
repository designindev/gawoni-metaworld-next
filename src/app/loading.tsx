import { Backdrop, CircularProgress } from '@mui/material'

export default function Loading() {
  return (
    <Backdrop sx={{ zIndex: 999 }} open>
      <CircularProgress />
    </Backdrop>
  )
}
