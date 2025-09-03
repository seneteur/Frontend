import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Typography
      mt={0.5}
      px={1}
      py={3}
      color="text.secondary"
      variant="body2"
      sx={{ textAlign: { xs: 'center', md: 'right' } }}
      letterSpacing={0.5}
      fontWeight={500}
    >
      Made with ❤️ by{' '}
      <Link href="https://senateuremmanuel.com/" target="_blank" rel="noreferrer">
        {'Emmanuel Senateur'} <div className='flex justify-end'><h5>Contact:</h5><address>670971434</address></div>
      </Link>
    </Typography>
  );
};

export default Footer;
