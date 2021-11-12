import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TabelPenyesuaianPersediaan from "./TabelPenyesuaianPersediaan";
import { Autocomplete, Button } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import AddIcon from "@mui/icons-material/Add";
import PrintIcon from "@mui/icons-material/Print";

const PenyesuaianPersediaan = () => {
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
    <Stack spacing={3}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="subtitle2" gutterBottom component="div">
            <b style={{ color: "#545454" }}>PENYESUAIAN PERSEDIAAN</b>
          </Typography>
          <Divider />
          <ThemeRoot>
            <Box sx={{ minWidth: "32%", margin: 1 }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={[
                  { label: "The Shawshank Redemption", year: 1994 },
                  { label: "The Godfather", year: 1972 },
                ]}
                renderInput={(params) => (
                  <TextField {...params} label="Divisi" />
                )}
              />
            </Box>
            <Box sx={{ minWidth: "32%", margin: 1 }}>
              <TextField
                fullWidth
                id="standard-read-only-input"
                label="Faktur"
                defaultValue=""
              />
            </Box>
            <Box sx={{ minWidth: "31%", margin: 1 }}>
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
            <Box sx={{ minWidth: "32%", margin: 1 }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={[
                  { label: "The Shawshank Redemption", year: 1994 },
                  { label: "The Godfather", year: 1972 },
                ]}
                renderInput={(params) => (
                  <TextField {...params} label="Akun Penyeimbang" />
                )}
              />
            </Box>
            <Box sx={{ minWidth: "64%", margin: 1 }}>
              <TextField
                fullWidth
                id="standard-read-only-input"
                label="Deskripsi Akun"
                defaultValue=""
              />
            </Box>
            <Box sx={{ minWidth: "97%", margin: 1 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<FileUploadIcon />}
                fullWidth
              >
                Posting Penyesuaian (Selesai)
              </Button>
            </Box>
            <Box sx={{ minWidth: "65%", margin: 1 }}>
              <TextField
                id="outlined-multiline-static"
                label="Catatan"
                multiline
                fullWidth
                rows={3}
              />
            </Box>
            <Box sx={{ minWidth: "31%", margin: 1 }}>
              <TextField
                id="outlined-multiline-static"
                label="Catatan Perubahan"
                multiline
                fullWidth
                rows={3}
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
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={[
                  { label: "The Shawshank Redemption", year: 1994 },
                  { label: "The Godfather", year: 1972 },
                ]}
                renderInput={(params) => (
                  <TextField {...params} label="Grup Produk" />
                )}
              />
            </Box>
            <Box sx={{ minWidth: "48%", margin: 1 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<PrintIcon />}
                fullWidth
              >
                Cetak Formulir
              </Button>
            </Box>
            <Box sx={{ minWidth: "48%", margin: 1 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<PrintIcon />}
                fullWidth
              >
                Cetak Hasil
              </Button>
            </Box>
          </ThemeRoot>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="subtitle2" gutterBottom component="div">
            <b>TABEL PEMAKAIAN BARANG</b>
          </Typography>
          <Divider />
          <TabelPenyesuaianPersediaan />

          <ThemeRoot>
            <Box sx={{ minWidth: "48%", margin: 1 }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<PrintIcon />}
              >
                Cetak
              </Button>
            </Box>
            <Box sx={{ minWidth: "48%", margin: 1 }}>
              <Button
                fullWidth
                variant="contained"
                color="success"
                startIcon={<AddIcon />}
              >
                Tambah
              </Button>
            </Box>
          </ThemeRoot>

        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Stack>
  );
};

export default PenyesuaianPersediaan;
