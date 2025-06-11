import {
  Autocomplete,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";

export default function AutoComplete({
  inputStyle,
  parentDeco,
  options,
  getOptionLabel,
  value,
  onBlur = null,
  helper,
  onchange,
  label,
  deco,
  placeholder,
  size = "medium",
}) {
  return (
    <FormControl className={`!my-2 w-full ${parentDeco ? parentDeco : ""}`}>
      <Autocomplete
        className={`w-full ${deco}`}
        size={size}
        options={options}
        getOptionLabel={getOptionLabel}
        value={value}
        onChange={onchange}
        onBlur={onBlur}
        renderInput={(params) => (
          <TextField
            placeholder={placeholder ? placeholder : null}
            className="w-full"
            {...params}
            label={label}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "48px",
                borderRadius: inputStyle ? inputStyle : "",
              },
              "& .MuiOutlinedInput-input": {
                paddingY: 1.5, // reduce input text vertical padding
                paddingX: 3,
              },
            }}
          />
        )}
      />
      <FormHelperText className="!text-red-500 !pe-1 !text-right">
        {helper}
      </FormHelperText>
    </FormControl>
  );
}
