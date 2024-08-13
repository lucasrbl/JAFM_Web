import { z } from 'zod';
// export type UserType = {
//     id: string;
//     name: string;
//     cnpj: string;
//     turma: string;
//     profileImg: string;
//     email: string;
//     dataNascimento: string;
//     dataInicio: string;
//     cpf: string;
//     progresso: string;
//     ra: string;
//     telefone: string;

// }

export const userSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    ),
  confirmPassword: z
    .string()
    .min(8)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    ),
  name: z.string().min(4),
  cpf: z
    .string()
    .min(11)
    .regex(/^\d{11}$/),
  birthDate: z.string().date(),
  phoneNumber: z.string().min(9).max(9),
});

export type UserDataType = z.infer<typeof userSchema>;
