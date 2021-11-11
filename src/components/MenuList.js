import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import AppsIcon from '@mui/icons-material/Apps';

export default function MenuList() {

    const handleGroupList = () => {
        setOpenSub1(false);
        setOpenSub2(false);
        setOpenSub3(false);
        setOpenSub4(false);
        setOpenSub5(false);
        setOpenSub6(false);
    }
  
    const [openSub1, setOpenSub1] = React.useState(false);
    const handleClickSub1 = () => {
        handleGroupList();
        setOpenSub1(!openSub1);
    };
    
    const [openSub2, setOpenSub2] = React.useState(false);
    const handleClickSub2 = () => {
        handleGroupList();
        setOpenSub2(!openSub2);
    };
    
    const [openSub3, setOpenSub3] = React.useState(false);
    const handleClickSub3 = () => {
        handleGroupList();
        setOpenSub3(!openSub3);
    };
    
    const [openSub4, setOpenSub4] = React.useState(false);
    const handleClickSub4 = () => {
        handleGroupList();
        setOpenSub4(!openSub4);
    };
    
    const [openSub5, setOpenSub5] = React.useState(false);
    const handleClickSub5 = () => {
        handleGroupList();
        setOpenSub5(!openSub5);
    };
    
    const [openSub6, setOpenSub6] = React.useState(false);
    const handleClickSub6 = () => {
        handleGroupList();
        setOpenSub6(!openSub6);
    };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Menu
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClickSub1}>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="Umum" />
        {openSub1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSub1} timeout="auto" unmountOnExit>
        <List component="div" background-color="grey" disablePadding>
          <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Daftar User" /></ListItemButton>
          <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Daftar Persetujuan" /></ListItemButton>
          <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Daftar Jenis Pembayaran" /></ListItemButton>
          <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Maintenance" /></ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickSub2}>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="Produk" />
        {openSub2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSub2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Pemakaian Barang" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Penyesuaian Persediaan" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Daftar Produk" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Daftar Satuan" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Input Saldo Awal" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Laporan - Laporan" /></ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickSub3}>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="Pembelian" />
        {openSub3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSub3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Pembelian" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Retur Pembelian" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Pembayaran Hutang" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Penyesuaian Hutang" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Daftar Pemasok" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Input Saldo Hutang" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Laporan - Laporan" /></ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickSub4}>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="Penjualan" />
        {openSub4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSub4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Penjualan" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Point Of Sales" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Retur Penjualan" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Penerimaan Piutang" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Penyesuaian Piutang" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Daftar Pelanggan" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Input Saldo Piutang" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Laporan - Laporan" /></ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickSub5}>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="Akuntansi" />
        {openSub5 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSub5} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Input Jurnal" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Persetujuan Input Jurnal" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Laporan Jurnal Umum" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Buku Besar" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Neraca" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Laporan Laba Rugi" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Arus Kas" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Laporan Perubahan Ekuitas" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Aset Tetap" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Daftar Akun" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Tutup Buku Akhir Tahun" /></ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickSub6}>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="Bantuan" />
        {openSub6 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSub6} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Tutorial" /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }}><ListItemIcon><AppsIcon /></ListItemIcon><ListItemText primary="Tentang" /></ListItemButton>
        </List>
      </Collapse>

    </List>
  );
}
