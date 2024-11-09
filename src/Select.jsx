import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import heroes from './heroes.json'; // Asegúrate de que la ruta sea correcta

export default function HeroAutocomplete() {
  // Filtra los héroes de Marvel
  const marvelHeroes = heroes
    .filter(hero => hero.publisher === "Marvel Comics")
    .map(hero => hero.superhero);

  const [hero, setHero] = React.useState(null);

  return (
    <Box sx={{ minWidth: 120 }}>
      <Autocomplete
        options={marvelHeroes}
        value={hero}
        onChange={(event, newValue) => setHero(newValue)}
        renderInput={(params) => <TextField {...params} label="Buscar Héroe de Marvel" />}
        fullWidth
      />
    </Box>
  );
}
