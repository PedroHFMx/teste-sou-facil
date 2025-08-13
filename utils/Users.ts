export type User = {
  id: number;
  name: string;
  cpf: string;
  phone: string;
  email: string;
};

// Lista de objetos seguindo o modelo
export const usersList: User[] = [
  {
    id: 1,
    name: 'Jurandir da Silva Neto',
    cpf: '73.580.641/0001-36',
    phone: '(16) 2418-6050',
    email: 'fabrciopereira_melo@gmail.com',
  },
  {
    id: 2,
    name: 'Laricia Billé Cruz',
    cpf: '652.318.551-62',
    phone: '(17) 3514-1823',
    email: 'lucasnogueira74@bol.com.br',
  },
  {
    id: 3,
    name: 'Felipe Cretella Ibanez',
    cpf: '133.124.511-75',
    phone: '(14) 2288-2368',
    email: 'calebemoraes.souza31@live.com',
  },
  {
    id: 4,
    name: 'Rita Frossard Pereira',
    cpf: '868.367.151-82',
    phone: '(12) 2685-6591',
    email: 'natanielbraga.albuquerque@gmail.com',
  },
];
