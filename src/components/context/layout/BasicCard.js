import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BasicTextFields from "./BasicTextFields";
import TextareaDescription from "./TextareaDescription";

export default function BasicCard({ onCancel }) {

    return (
        <Card sx={{ minWidth: 275, margin: "20%", alignItems: "center" }}>
            <CardContent sx={{ textAlign: "center" }}>
                <Typography sx={{ fontSize: 20 }} gutterBottom>
                    Añadir Contexto
                </Typography>
                <BasicTextFields />
                <TextareaDescription />
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }} >
                <Button size="small" >Añadir</Button>
                <Button size="small" onClick={onCancel}>
                    Cancelar
                </Button>
            </CardActions>
        </Card>
    );
}