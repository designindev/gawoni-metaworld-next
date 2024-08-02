'use client'

import { Box, Typography } from '@mui/material'
import { LineChart } from '@mui/x-charts/LineChart'
import { COLORS } from 'shared/const'

export const Chart = () => {
  return (
    <Box bgcolor={'dark.main'} borderRadius={2} px={7} py={4}>
      <Typography variant='h6' component='h3' mb={3}>
        Selling overview
      </Typography>
      <Box ml={-5}>
        <LineChart
          xAxis={[
            {
              data: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Aug', 'Sep', 'Nov', 'Dec'],
              scaleType: 'band' as const,
            },
          ]}
          series={[
            {
              data: [0, 40, 50, 40, 70, 100, 45, 33, 40, 60, 50, 36],
              color: COLORS.primary,
            },
          ]}
          height={300}
          margin={{ left: 30, right: 0, top: 30, bottom: 35 }}
          grid={{ vertical: true }}
        />
      </Box>
    </Box>
  )
}
