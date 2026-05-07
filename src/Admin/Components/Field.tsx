import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";

type FieldProps = {
  label: string;
  children: ReactNode;
};

type InputProps = Omit<TextFieldProps, "value" | "onChange" | "sx"> & {
  value: string | number;
  onChange: (value: string) => void;
  sx?: SxProps<Theme>;
};

type SelectInputProps = InputProps & {
  children: ReactNode;
};

export function Field({ label, children }: FieldProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75, minWidth: 0 }}>
      <Typography
        component="span"
        sx={{ color: "#424a53", fontSize: "0.8rem", fontWeight: 750 }}
      >
        {label}
      </Typography>
      {children}
    </Box>
  );
}

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    bgcolor: "#fff",
  },
};

export function TextInput({ value, onChange, sx, ...props }: InputProps) {
  return (
    <TextField
      fullWidth
      size="small"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      sx={{ ...fieldSx, ...sx }}
      {...props}
    />
  );
}

export function TextArea({ value, onChange, sx, ...props }: InputProps) {
  return (
    <TextField
      fullWidth
      multiline
      size="small"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      sx={{ ...fieldSx, ...sx }}
      {...props}
    />
  );
}

export function SelectInput({
  value,
  onChange,
  children,
  sx,
  ...props
}: SelectInputProps) {
  return (
    <TextField
      fullWidth
      select
      size="small"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      SelectProps={{ native: true }}
      sx={{ ...fieldSx, ...sx }}
      {...props}
    >
      {children}
    </TextField>
  );
}
