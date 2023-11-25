const errors: { [key: number]: string } = {
    500: 'Ocurrió un error en el servidor',
    404: 'No se encontró el recurso solicitado',
    0: 'Error desconocido'
}

export const CustomErrorResponse = (statusCode: number) => {
    throw new Error(errors[statusCode] ?? 0);
}