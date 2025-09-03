import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';

interface TasksProps {
  id: number | string;
  task: number
  schedule: string;
}

const tasks: TasksProps[] = [
  {
    id: Math.floor(Math.random() * 1000),
    task: Math.floor(Math.random() * (1000 - 500 + 1) + 500),
    schedule: '01:00 PM - 02:00 PM',
  }
];
 const getRandomMonth = (): string => {
    const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
    console.log(months);
  const randomIndex = Math.floor(Math.random() * months.length);
  return months[randomIndex];

 }
const Tasks = () => {
  return (
    <Paper sx={{ height: 355 }}>
      <Typography mb={3.5} variant="h5">
        Solde de Mois:{getRandomMonth()}
      </Typography>

      {tasks.map((item) => {
        return (
          <Stack key={item.id} mb={2.5} spacing={1.5} alignItems="center">
            <Box height={40} width={4} bgcolor="primary.main" borderRadius={2} />

            <Stack direction="column">
              <Typography variant="body1" fontWeight={700}>
               Gain: {item.task}
              </Typography>
              <Typography variant="caption" fontWeight={500} color="text.disabled">
                {item.schedule}
              </Typography>
            </Stack>
          </Stack>
        );
      })}

      <Stack justifyContent="flex-end">
        <Button
          variant="text"
          size="medium"
          sx={{ mt: 0.65, mr: -1, color: 'primary.main', fontWeight: 700 }}
          endIcon={<IconifyIcon icon="ic:baseline-east" />}
        >
          View all Tasks
        </Button>
      </Stack>
    </Paper>
  );
};

export default Tasks;
