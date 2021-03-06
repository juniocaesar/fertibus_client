import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      alignItems: "center",
      lineHeight: "24px",
      width: "100%",
      height: "100%",
      position: "relative",
      display: "flex",
      "& .cellValue": {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
  })
);

function isOverflown(element) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

const GridCellExpand = React.memo(function GridCellExpand(props) {
  const { width, value } = props;
  const wrapper = React.useRef(null);
  const cellDiv = React.useRef(null);
  const cellValue = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const [showFullCell, setShowFullCell] = React.useState(false);
  const [showPopper, setShowPopper] = React.useState(false);

  const handleMouseEnter = () => {
    const isCurrentlyOverflown = isOverflown(cellValue.current);
    setShowPopper(isCurrentlyOverflown);
    setAnchorEl(cellDiv.current);
    setShowFullCell(true);
  };

  const handleMouseLeave = () => {
    setShowFullCell(false);
  };

  React.useEffect(() => {
    if (!showFullCell) {
      return undefined;
    }

    function handleKeyDown(nativeEvent) {
      // IE11, Edge (prior to using Bink?) use 'Esc'
      if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
        setShowFullCell(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowFullCell, showFullCell]);

  return (
    <div
      ref={wrapper}
      className={classes.root}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cellDiv}
        style={{
          height: 1,
          width,
          display: "block",
          position: "absolute",
          top: 0,
        }}
      />
      <div ref={cellValue} className="cellValue">
        {value}
      </div>
      {showPopper && (
        <Popper
          open={showFullCell && anchorEl !== null}
          anchorEl={anchorEl}
          style={{ width, marginLeft: -17 }}
          >
          <Paper
            elevation={1}
            style={{ minHeight: wrapper.current.offsetHeight - 3 }}
          >
            <Typography variant="body2" style={{ padding: 8 }}>
              {value}
            </Typography>
          </Paper>
        </Popper>
      )}
    </div>
  );
});

GridCellExpand.propTypes = {
  value: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

function renderCellExpand(params) {
  return (
    <GridCellExpand
      value={params.value || ""}
      width={params.colDef.computedWidth}
    />
  );
}

renderCellExpand.propTypes = {
  /**
   * The column of the row that the current cell belongs to.
   */
  colDef: PropTypes.object.isRequired,
  /**
   * The cell value, but if the column has valueGetter, use getValue.
   */
  value: PropTypes.string.isRequired,
};

const columns = [
  { field: "kode", headerName: "Kode Produk", width: 180, editable: true },
  {
    field: "nama",
    headerName: "Nama Produk",
    width: 380,
    editable: true,
    renderCell: renderCellExpand,
  },
  { field: "sn", headerName: "Serial Number", width: 180, editable: true },
  {
    field: "tglKadaluwarsa",
    headerName: "Tanggal Kadaluwarsa",
    type: "date",
    width: 180,
    editable: true,
  },
  { field: "jumlahTerekam", headerName: "Jumlah Terekam", width: 180, editable: true },
  { field: "satuanTerekam", headerName: "Satuan Terekam", width: 180, editable: true },
  { field: "jumlahFisik", headerName: "Jumlah Fisik", width: 180, editable: true },
  { field: "satuanFisik", headerName: "Satuan Fisik", width: 180, editable: true },
  { field: "hpp", headerName: "HPP", width: 180, editable: true },
  { field: "memo", headerName: "Memo", width: 180, editable: true },
  { field: "jumlah(penambahan)", headerName: "Jumlah (Penambahan)", width: 180, editable: true },
  { field: "nilai(penambahan)", headerName: "Nilai (Penambahan)", width: 180, editable: true },
  { field: "jumlah(pengurangan)", headerName: "Jumlah (Pengurangan)", width: 180, editable: true },
  { field: "nilai(pengurangan)", headerName: "Nilai (Pengurangan)", width: 180, editable: true },
];

const rows = [
  {
    id: 1,
    kode: "XX-XXX",
    nama: "Barangku",
    sn: "X-X-XX",
    tglKadaluwarsa: new Date(),
    jumlah: 3,
    satuan: "Pcs",
    memo: "Dicek barangnya",
  },
  {
    id: 2,
    kode: "XX-XXX",
    nama: "Barangku2",
    sn: "X-X-XX",
    tglKadaluwarsa: new Date(),
    jumlah: 2,
    satuan: "Kg",
    memo: "Dicek kedua barangnya",
  },
];

export default function TabelPenyesuaianPersediaan() {
  const [editRowsModel, setEditRowsModel] = React.useState({});

  const handleEditRowsModelChange = React.useCallback((model) => {
    setEditRowsModel(model);
  }, []);

  return (
    <Box m={1} sx={{ width: "97%" }}>
      {/* <Alert severity="info" style={{ marginBottom: 8 }}>
        <code>editRowsModel: {JSON.stringify(editRowsModel)}</code>
      </Alert> */}
      <Box style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
          editRowsModel={editRowsModel}
          onEditRowsModelChange={handleEditRowsModelChange}
        />
      </Box>
    </Box>
  );
}
