import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import BasicCard from "./BasicCard";
export default function BasicTextFields() {
    const [textFieldValue, setTextFieldValue] = React.useState("");
    const [error, setError] = React.useState(false);

    const handleTextFieldChange = (event) => {
        const value = event.target.value;
        setTextFieldValue(value);
        setError(value.trim() === ""); // Validación: campo vacío
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (textFieldValue.trim() === "") {
            setError(true); // Marcar como error si el campo está vacío al enviar
            return;
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                "& > :not(style)": { m: 1, width: "30ch" }
            }}
            Validate
        >
            <TextField
                id="filled-basic"
                label="Nombre*"
                variant="filled"
                value={textFieldValue}
                onChange={handleTextFieldChange}
                error={error}
                helperText={error ? "Campo requerido" : ""}
                sx={{ "&:hover": { color: "#007A9B" } }}
            />
        </Box>
    );
}