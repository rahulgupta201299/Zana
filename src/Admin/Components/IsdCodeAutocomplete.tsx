import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useMemo } from "react";

import { AdminIsdCode } from "../Configurations/AdminIsdCodeApi";

const DEFAULT_ISD_CODE = "+91";
const DEFAULT_ISD_OPTION: AdminIsdCode = {
  code: "IN",
  isd: DEFAULT_ISD_CODE,
  name: "India",
};

function normalizeIsdCode(isd: string): string {
  const trimmed = isd.trim();
  if (!trimmed) return DEFAULT_ISD_CODE;
  return trimmed.startsWith("+") ? trimmed : `+${trimmed}`;
}

function optionLabel(option: AdminIsdCode): string {
  return `${normalizeIsdCode(option.isd)} ${option.name}`;
}

type IsdCodeAutocompleteProps = {
  id: string;
  options: AdminIsdCode[];
  value: string;
  onChange: (value: string) => void;
};

export default function IsdCodeAutocomplete(props: IsdCodeAutocompleteProps) {
  const { id, options, value, onChange } = props;

  const normalizedOptions = useMemo(() => {
    const hasDefault = options.some((option) => normalizeIsdCode(option.isd) === DEFAULT_ISD_CODE);
    return hasDefault ? options : [DEFAULT_ISD_OPTION, ...options];
  }, [options]);

  const selectedOption =
    normalizedOptions.find((option) => normalizeIsdCode(option.isd) === value) ?? DEFAULT_ISD_OPTION;

  return (
    <Autocomplete
      id={id}
      size="small"
      options={normalizedOptions}
      value={selectedOption}
      onChange={(_event, nextValue) => {
        onChange(nextValue ? normalizeIsdCode(nextValue.isd) : DEFAULT_ISD_CODE);
      }}
      getOptionLabel={optionLabel}
      isOptionEqualToValue={(option, selected) =>
        normalizeIsdCode(option.isd) === normalizeIsdCode(selected.isd) && option.name === selected.name
      }
      renderInput={(params) => (
        <TextField {...params} label="ISD" />
      )}
      sx={{ minWidth: 180 }}
    />
  );
}
