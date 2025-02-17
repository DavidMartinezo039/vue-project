import * as yup from 'yup';

export const schema = yup.object({
    nombre: yup.string().required("El nombre de usuario es obligatorio").matches(/^[a-zA-Z]+$/, 'El nombre solo puede contener letras'),
    email: yup.string().email().required("El email es obligatorio"),
});