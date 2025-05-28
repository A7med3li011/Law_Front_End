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
    <FormControl className={`!my-2 ${parentDeco ? parentDeco : ""} `}>
      <Autocomplete
        className={deco}
        size={size}
        options={options} // List of municipalities
        // getOptionLabel={(option) => option}  Display option as string
        getOptionLabel={getOptionLabel}
        value={value} // Formik value
        // onChange={(event, newValue) =>
        //   registerFormik.setFieldValue("location", newValue)
        // }
        onChange={onchange}
        onBlur={onBlur}
        renderInput={(params) => (
          <TextField
            placeholder={placeholder ? placeholder : null}
            className=" "
            {...params}
            label={label}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: inputStyle ? inputStyle : "", // rounded-xl
              },
            }}
          />
        )}
      />
      <FormHelperText className=" !text-red-500 !pe-1 !text-right">
        {helper}
      </FormHelperText>
    </FormControl>
  );
}
