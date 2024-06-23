export const formatCurrency = (value: number): string => {
    return value.toLocaleString('es-ES', {
        style: 'currency',
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).replace('US', '').replace('$', '').trim();
};