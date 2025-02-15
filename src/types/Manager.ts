import z from 'zod';

const Manager = z.object({
  name: z.string(),
  ra: z
    .string()
    .min(6)
    .max(6)
    .regex(/^\d{6}$/),
  class: z.string().min(4).max(4),
  email: z.string().email(),
  birthDate: z.string().date(),
  startDate: z.string().date(),
  affiliate: z.string(),
  cpf: z.string(),
  //progress: z.number().positive(),
  phone: z.string().regex(/^(\d{2})(\d{5})(\d{4})$/),
  cnpj: z.string(),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
    ),
  confirmPassword: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
    ),
});

export type Manager = z.infer<typeof Manager>;

// id: string;
// profileImg: string;
