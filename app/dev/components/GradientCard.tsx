import { Card, CardContent, CardHeader, Grid, Stack } from '@mui/material';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface GradientCardProps {
  start: any,
  end: any,
  path: any,
  children: any
}

const GradientCard: FunctionComponent<GradientCardProps> = ({
  children,
  start,
  end,
  path
}) => {
  return (
    <Grid item xs={12} md={6} justifyContent={"center"} display={'flex'} marginBottom={4}>
      <Link href={path} style={{width: '90%'}}>
        <Card
          sx={{
            borderRadius: 3,
            height: '365px',
            backgroundImage: `linear-gradient(110deg, ${start} 0%, ${start} 30%, ${end} 70%, ${end} 100%)`
          }}>
          <Stack height={'100%'} direction="row" flexWrap="wrap" justifyContent="center" alignItems="center">
            {children}
          </Stack>
        </Card>
      </Link>
    </Grid>
  );
};

export default GradientCard;
