//lavet af Rina

import { useState } from 'react';
import {
  ThemeProvider,
  CssBaseline,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Stack,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { customTheme } from '../themes/themes';

import alabamahills from "../assets/pictures/alabamahills.jpg";
import azores from "../assets/pictures/azores.jpg";
import bali from "../assets/pictures/bali.jpg";
import bellagio from "../assets/pictures/bellagio.jpg";
import bhutan from "../assets/pictures/bhutan.jpg";
import dubai from "../assets/pictures/dubai.jpg";
import firestatepark from "../assets/pictures/firestatepark.jpg";
import hamburg from "../assets/pictures/hamburg.jpg";
import iceland from "../assets/pictures/iceland.jpg";
import lapland from "../assets/pictures/lapland.jpg";
import manarola from "../assets/pictures/manarola.jpg";
import oia from "../assets/pictures/oia.jpg";
import salvador from "../assets/pictures/salvador.jpg";
import santorini from "../assets/pictures/santorini.jpg";
import switzerland from "../assets/pictures/switzerland.jpg";
import venice from "../assets/pictures/venice.jpg";




const travelCategories = [
  'Luxury Travel',
  'Backpacking',
  'Road Trips',
  'Volunteer Travel',
  'Educational Travel',
  'Medical Tourism',
  'Religious Tourism',
  'Pilgrimage Travel',
  'Honeymoon Travel',
];



const images = [
  { id: 1, url: alabamahills, title: 'Alabamahills', category: 'Road Trips' },
  { id: 2, url: azores, title: 'Azores', category: 'Religious Tourism' },
  { id: 3, url: bali, title: 'Bali', category: 'Luxury Travel' },
  { id: 5, url: bellagio, title: 'Bellagio', category: 'Religious Tourism' },
  { id: 6, url: bhutan, title: 'Bhutan', category: 'Medical Tourism' },
  { id: 7, url: dubai, title: 'Dubai', category: 'Luxury Travel' },
  { id: 8, url: firestatepark, title: 'Firestatepark', category: 'Luxury Travel' },
  { id: 9, url: hamburg, title: 'Hamburg', category: 'Luxury Travel' },
  { id: 10, url: iceland, title: 'Iceland', category: 'Educational Travel' },
  { id: 11, url: lapland, title: 'Lapland', category: 'Honeymoon Travel' },
  { id: 12, url: manarola, title: 'Manarola', category: 'Luxury Travel' },
  { id: 13, url: oia, title: 'Oia', category:  'Volunteer Travel' },
  { id: 14, url: salvador, title: 'Salvador', category: 'Pilgrimage Travel' },
  { id: 15, url: santorini, title: 'Santorini', category: 'Luxury Travel' },
  { id: 16, url: switzerland, title: 'Switzerland', category: 'Backpacking' },
  { id: 17, url: venice, title: 'Venice', category:  'Pilgrimage Travel' },
];

const TravelFilter = () => {
  const outerTheme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <ThemeProvider theme={customTheme(outerTheme)} >
      <CssBaseline enableColorScheme />
      <FormControl sx={{ m: 3, width: 300 }}>
        <InputLabel id="category-label">Select Travel Category</InputLabel>
        <Select
          labelId="category-label"
          id="category-select"
          value={selectedCategory}
          label="Select Travel Category"
          onChange={handleCategoryChange}
          sx={{
            maxWidth: '600px',
          }}
        >
          <MenuItem value="">All Categories</MenuItem>
          {travelCategories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Stack
      spacing={2}
      direction="row"
      flexWrap="wrap"
      alignItems="center"
      alignContent="center"
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {images
        .filter((image) => !selectedCategory || image.category === selectedCategory)
        .map((image) => (
          <div
            key={image.id}
            style={{
              flex: '0 0 15%',
              margin: '0 0 3%',
              position: 'relative',
              textAlign: 'center',
            }}
          >
            <img
              src={image.url}
              alt={image.title}
              style={{
                maxWidth: '250px',
                maxHeight: '300px',
                display: 'block',
                borderRadius: '20px',
                margin: '5px'
              }}
            />
            <Typography
              variant="subtitle1"
              style={{
                position: 'absolute',
                top: '50%', // Center vertikalt på billedet
                left: '50%', // Center horisontalt på billedet
                transform: 'translate(-50%, -50%)', // Center både vertikalt og horisontalt
                backgroundColor: 'rgba(255, 255, 255, 0.7)', // giver teksten en gennemsigtig baggrund så teksten står mere frem
                padding: '5px',
                borderRadius: '5px',
              }}
            >
              {image.title}
            </Typography>
          </div>
        ))}
    </Stack>
    </ThemeProvider>
  );
};

export default TravelFilter;
