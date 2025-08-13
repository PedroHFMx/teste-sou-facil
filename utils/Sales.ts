enum status {
  pending,
  concluded,
}

export type Sale = {
  id: number;
  price: string;
  customerName: string;
  saleDate: string;
  status: status;
};

export const salesList: Sale[] = [
  {
    id: 1,
    price: '300',
    customerName: 'Jurandir da Silva Neto',
    saleDate: '15/05/2025',
    status: status.concluded,
  },
  {
    id: 2,
    price: '1.000',
    customerName: 'Laricia Billé Cruz',
    saleDate: '02/12/2024',
    status: status.pending,
  },
  {
    id: 3,
    price: '400',
    customerName: 'Felipe Cretella Ibanez',
    saleDate: '24/02/2025',
    status: status.pending,
  },
  {
    id: 4,
    price: '2.000',
    customerName: 'Rita Frossard Pereira',
    saleDate: '28/05/2025',
    status: status.concluded,
  },
];
