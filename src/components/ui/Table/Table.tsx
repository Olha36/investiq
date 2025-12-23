"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { FC } from "react";

import type {
  Transaction,
  SummaryItem,
  TransactionsTableProps,
} from "@/src/types/Table";

const TransactionRow: FC<{
  transaction: Transaction;
  index: number;
  onDelete?: (index: number) => void;
}> = ({ transaction, index, onDelete }) => (
  <TableRow key={index}>
    <TableCell>{transaction.date}</TableCell>
    <TableCell>{transaction.description}</TableCell>
    <TableCell>{transaction.category}</TableCell>
    <TableCell sx={{ color: "green", fontWeight: "bold" }}>
      {transaction.amount.toLocaleString()} грн.
    </TableCell>
    <TableCell>
      {onDelete && (
        <IconButton onClick={() => onDelete(index)}>
          <DeleteOutlineIcon />
        </IconButton>
      )}
    </TableCell>
  </TableRow>
);

const SummaryBoxItem: FC<{ item: SummaryItem }> = ({ item }) => (
  <Box
    display="flex"
    justifyContent="space-between"
    mb={1}
    sx={{
      borderBottom: "1px solid rgba(224, 224, 224, 1)",
      padding: "24px",
      backgroundColor: "#F5F6FB",
    }}
  >
    <Typography>{item.month}</Typography>
    <Typography>{item.amount.toLocaleString()}</Typography>
  </Box>
);

export const TransactionsTable: FC<TransactionsTableProps> = ({
  transactions,
  summary,
  onDelete,
}) => {
  return (
    <Box display="flex" gap={2.5} sx={{ padding: "20px" }}>
      <TableContainer component={Paper} sx={{ flex: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F5F6FB" }}>
              <TableCell
                style={{ fontWeight: 700, textTransform: "uppercase" }}
              >
                дата
              </TableCell>
              <TableCell
                style={{ fontWeight: 700, textTransform: "uppercase" }}
              >
                опис
              </TableCell>
              <TableCell
                style={{ fontWeight: 700, textTransform: "uppercase" }}
              >
                категорія
              </TableCell>
              <TableCell
                style={{ fontWeight: 700, textTransform: "uppercase" }}
              >
                сума
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TransactionRow
                key={index}
                transaction={transaction}
                index={index}
                onDelete={onDelete}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer
        component={Paper}
        sx={{ flex: 1, backgroundColor: "#F5F6FB" }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F5F6FB" }}>
              <TableCell sx={{ fontWeight: 700, textTransform: "uppercase" }}>
                зведення
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {summary.map((item, index) => (
              <SummaryBoxItem key={index} item={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
