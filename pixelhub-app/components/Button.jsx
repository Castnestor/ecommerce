import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

//fot this component yo need to pass the variant you want to use for the button this ones can be ("text", "contained", "outlined")
export default function ButtonTypes({ variant, background, color }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant={variant} sx={{ backgroundColor: {background}, borderColor: {color}}}>Text</Button>
    </Stack>
  );
}