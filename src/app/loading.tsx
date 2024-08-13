import { Backdrop, CircularProgress } from '@mui/material'

export default function Loading() {
  return (
    <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
      <CircularProgress />
    </Backdrop>
  )
}
