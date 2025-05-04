import { FormHelperText, TextField } from "@mui/material";

export default function Input({
  helperDeco,
  inputDeco,
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
  type,
}) {
  return (
    <div className={divDeco}>
      <TextField
        type={type}
        name={name}
        className={deco}
        label={label}
        variant="outlined"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        InputProps={{
          classes: {
            input: inputDeco, // Tailwind classes like "py-4 px-6 rounded-xl"
          },
        }}
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
        <FormHelperText
          className={`${
            helperDeco ? helperDeco : "!pe-1 !text-right  !text-red-500"
          }`}
        >
          {helper}
        </FormHelperText>
      )}
    </div>
  );
}
