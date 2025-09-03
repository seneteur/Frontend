import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
//import EarningsChart from './EarningsChart';
import { ScatterChart } from '@mui/x-charts';
import {data} from 'data/RanDomData.ts';

const Earnings = () => {
  return (
    <Paper sx={{ px: 0, height: 355 }}>
      <Stack
        ml="auto"
        mr={3.5}
        alignItems="center"
        justifyContent="center"
        height={35}
        width={35}
        bgcolor="info.main"
        borderRadius={1.75}
      >
        <IconifyIcon icon="ic:round-bar-chart" color="primary.main" fontSize="h4.fontSize" />
      </Stack>

      <Typography variant="body2" textAlign="center" color="text.disabled" fontWeight={500}>
        Gain de ce Mois
      </Typography>
      <Typography mt={0.5} variant="h2" textAlign="center" color="text.primary">
        682.5FCFA
      </Typography>

      <Stack mt={2} justifyContent="center">
        <Chip label="+2.45%" color="success" />
      </Stack>

      <ScatterChart
      height={200}
      series={[
        {
          label: 'Series A',
          data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
        },
        {
          label: 'Series B',
          data: data.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
        },
      ]}
      grid={{ vertical: true, horizontal: true }}
    
    />
    </Paper>
  );
};

export default Earnings;
