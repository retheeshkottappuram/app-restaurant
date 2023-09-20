import {styled} from '@mui/system'
import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton';

const nav_titles = [
    {
      path:'/',
      display:'Home'
    },
    {
      path:'/',
      display:'Dishes'
    },
    {
      path:'/',
      display:'Services'
    },
    {
      path:'/',
      display:'About Us'
    }
  ]


  const NavBarLinksBox = styled(Box)(({ theme }) => ({
display: "flex",
alignItems: "center",
justifyContent: "center",
gap: theme.spacing(3),
[theme.breakpoints.down("md")]: {
    display:"none",
},
  }));

  const NavBarLink = styled(Typography)(() => ({
    fontSize: "15px",
    color:'#4F5361',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover':{
        color:'#fff'
    }

      }));


function Header() {
  return (
<Box
    sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'40px',
        maxWidth:'auto',
        backgroundColor:'#FED801',
        marginLeft:'0px',
        marginBottom:'-24px'

    }}
>


<Box
    sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'2.5rem'
    }}>
<NavBarLinksBox>
    {nav_titles.map((item,index)=>(
    <NavBarLink variant="body2">
    {item.display}
</NavBarLink>
    ))
    }
</NavBarLinksBox>
    

    </Box>
    <Box sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'1rem'
    }}>
    <NavBarLink variant="body2">
    Sign Up
</NavBarLink>
<CustomButton 
backgroundColor='#0F1B4C'
color='#fff'
buttonText="Register"
/>
    </Box>
</Box>
  )
}

export default Header