export const formatCpf = (cpf: string) => {
  return (
    cpf
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por string vazia
      /* captura 2 grupos de números, 
    o primeiro grupo composto por 3 números e o segundo grupo por 1, 
    após capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de números
    Ex: 123456 - 123.456*/
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  );
};
