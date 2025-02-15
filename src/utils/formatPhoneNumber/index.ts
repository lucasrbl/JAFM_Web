export const formatPhoneNumber = (phone: string) => {
  return phone
    .replace(/\D/g, '') // Remove todos os caracteres não numéricos
    .replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3'); // Formata como (XX) XXXXX-XXXX
};
