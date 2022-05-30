import {
  CardContent,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  Paper,
} from '@mui/material';
import React from 'react';
import { locations } from './locations';

const Main = ({ onClick }) => {
  return (
    <Paper
      elevation={18}
      sx={{
        width: '100%',
        backgroundColor: 'lemonchiffon',
        marginBottom: 3,
      }}
    >
      <ListSubheader sx={{ backgroundColor: 'inherit' }}>
        Choose a picture to begin searching for Waldo
      </ListSubheader>
      <CardContent>
        <ImageList>
          <ImageListItem key="Subheader" cols={2}></ImageListItem>
          {locations.map((item, index) => {
            return (
              <ImageListItem sx={{ cursor: 'pointer' }} key={index}>
                <img
                  src={`${item.source}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.source}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  onClick={onClick}
                />
                <ImageListItemBar
                  title={item.title}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    ></IconButton>
                  }
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </CardContent>
    </Paper>
  );
};

export default Main;
