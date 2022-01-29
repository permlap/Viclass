
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import React, { useEffect, useState } from 'react';

const icon = (
  <h1>5</h1>
);

export default function SimpleGrow() {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
      setChecked(true);
    }, []);

  
  return (
   
      <Box sx={{ display: 'flex' }}><Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          {icon}
        </Grow>
      </Box>
    
  );
}
