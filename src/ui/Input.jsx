import { FormHelperText, TextField } from "@mui/material";

export default function Input({
  inputStyle,
  divDeco,
  value,
  onChange,
  onBlur = null,
  label,
  name,
  deco,
  helper,
  isError,
}) {
  return (
    <div className={divDeco}>
      <TextField
        name={name}
        className={deco}
        label={label}
        variant="outlined"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: inputStyle ? inputStyle : "", // rounded-xl
          },
          "& input": {
            paddingY: 1.5, // reduce input text vertical padding
            paddingX: 3,
            borderRadius: 100,
          },
        }}
      />
      {isError && (
        <FormHelperText className="!pe-1 !text-right  !text-red-500">
          {helper}
        </FormHelperText>
      )}
    </div>
  );
}
