export enum role {
  adm,
  user,
}

export type User = {
  id: number;
  name: string;
  cpf: string;
  phone: string;
  email: string;
  role: role;
};

// Lista de objetos seguindo o modelo
export const usersList: User[] = [
  {
    id: 1,
    name: 'Jurandir da Silva Neto',
    cpf: '73.580.641/0001-36',
    phone: '(16) 2418-6050',
    email: 'fabrciopereira_melo@gmail.com',
    role: role.user,
  },
  {
    id: 2,
    name: 'Laricia Billé Cruz',
    cpf: '652.318.551-62',
    phone: '(17) 3514-1823',
    email: 'lucasnogueira74@bol.com.br',
    role: role.user,
  },
  {
    id: 3,
    name: 'Felipe Cretella Ibanez',
    cpf: '133.124.511-75',
    phone: '(14) 2288-2368',
    email: 'calebemoraes.souza31@live.com',
    role: role.user,
  },
  {
    id: 4,
    name: 'Rita Frossard Pereira',
    cpf: '868.367.151-82',
    phone: '(12) 2685-6591',
    email: 'natanielbraga.albuquerque@gmail.com',
    role: role.user,
  },
  {
    id: 5,
    name: 'Kevin Caldas Ximenes',
    cpf: '868.367.151-82',
    phone: '(14) 3455-1492',
    email: 'kevinnn111@outlook.com',
    role: role.adm,
  },
  {
    id: 6,
    name: 'Márcia Maia da Silva',
    cpf: '132.062.634-33',
    phone: '(11) 99454-1232',
    email: 'marcia123@gmail.com',
    role: role.adm,
  },
];
