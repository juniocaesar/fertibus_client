import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TabelPemakaianBarang from "./TabelPemakaianBarang";
import { Autocomplete, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from '@mui/icons-material/Add';

const PemakaianBarang = () => {
  const [dateTimeVal, setDateTimeVal] = React.useState(new Date());
  const handleDateTimeChange = (newValue) => {
    setDateTimeVal(newValue);
  };

  const ThemeRoot = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      display: "block",
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexWrap: "wrap",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexWrap: "wrap",
    },
  }));

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="subtitle2" gutterBottom component="div">
          <b>PEMAKAIAN BARANG</b>
        </Typography>
        <Divider />
        <ThemeRoot>
          <Box sx={{ minWidth: "48%", margin: 1 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={[
                { label: "The Shawshank Redemption", year: 1994 },
                { label: "The Godfather", year: 1972 },
              ]}
              renderInput={(params) => <TextField {...params} label="Divisi" />}
            />
          </Box>
          <Box sx={{ minWidth: "48%", margin: 1 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={[
                { label: "The Shawshank Redemption", year: 1994 },
                { label: "The Godfather", year: 1972 },
              ]}
              renderInput={(params) => (
                <TextField {...params} label="Departemen" />
              )}
            />
          </Box>
          <Box sx={{ minWidth: "48%", margin: 1 }}>
            <TextField
              fullWidth
              id="standard-read-only-input"
              label="Faktur"
              defaultValue=""
            />
          </Box>
          <Box sx={{ minWidth: "48%", margin: 1 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DateTimePicker
                  label="Waktu"
                  value={dateTimeVal}
                  onChange={handleDateTimeChange}
                  ampm={false}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </Box>
          <Box sx={{ minWidth: "97%", margin: 1 }}>
            <TextField
              id="outlined-multiline-static"
              label="Catatan"
              multiline
              fullWidth
              rows={3}
            />
          </Box>
          <Box sx={{ minWidth: "20%", margin: 1 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={[
                { label: "The Shawshank Redemption", year: 1994 },
                { label: "The Godfather", year: 1972 },
              ]}
              renderInput={(params) => (
                <TextField {...params} label="Akun Lawan" />
              )}
            />
          </Box>
          <Box sx={{ minWidth: "76%", margin: 1 }}>
            <TextField
              fullWidth
              id="standard-read-only-input"
              label="Deskripsi Akun Lawan"
              defaultValue=""
            />
          </Box>
        </ThemeRoot>
        <br />
        <Typography variant="subtitle2" gutterBottom component="div">
          <b>TABEL PEMAKAIAN BARANG</b>
        </Typography>
        <Divider />
        <TabelPemakaianBarang />

        <Grid container spacing={1}>
          <Grid item xs={6}>
          <Button fullWidth variant="outlined" color='error' startIcon={<DeleteIcon />}>
            Hapus
          </Button>
          </Grid>
          <Grid item xs={6}>
          <Button fullWidth variant="contained" color='success' startIcon={<AddIcon />}>
            Tambah
          </Button>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default PemakaianBarang;
