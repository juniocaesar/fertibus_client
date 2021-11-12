import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';

import MenuList from "./components/MenuList";
import Dashboard from "./components/Dashboard";
import PemakaianBarang from "./components/Produk/PemakaianBarang";
import PenyesuaianPersediaan from "./components/Produk/PenyesuaianPersediaan";
import DaftarProduk from "./components/Produk/DaftarProduk";
import DaftarSatuan from "./components/Produk/DaftarSatuan";
import InputSaldoAwal from "./components/Produk/InputSaldoAwal";

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 225;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <b>Fertibus</b><small>App</small>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <MenuList></MenuList>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Routes>
            <Route exact path="/dashboard" element={
              <Dashboard />
            }/>
            <Route exact path="/produk/pemakaian_barang" element={
              <PemakaianBarang />
            }/>
            <Route exact path="/produk/penyesuaian_persediaan" element={
              <PenyesuaianPersediaan />
            }/>
            <Route exact path="/produk/daftar_produk" element={
              <DaftarProduk />
            }/>
            <Route exact path="/produk/daftar_satuan" element={
              <DaftarSatuan />
            }/>
            <Route exact path="/produk/input_saldo_awal" element={
              <InputSaldoAwal />
            }/>
          </Routes>
        </Main>
      </Box>
    </Router>
  );
}


// import TestList from "./components/TestExample/TestList";
// import AddTest from "./components/AddTest";
// import EditTest from "./components/EditTest";

// function App() {
//   return (
  //     <Router>
//       <div className="container">
//         <div className="columns">
//           <div className="column is-half is-offset-one-quarter">
//             <Routes>
//               <Route exact path="/" element={
//                 <TestList />
//               }/>
//               <Route exact path="/add" element={
//                 <AddTest />
//               }/>
//               <Route exact path="/update/:id" element={
//                 <EditTest />
//               }/>
//               <Route exact path="/update/:id" element={
//                 <EditTest />
//               }/>
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
