interface CompanyInfo {
   nome: string;
   fundacao: number;
   pais: string;
}

interface ProductInfos {
   nome: string;
   preco: number;
   descricao: string;
   garantia: string;
   seguroAcidentes: boolean;

   empresaFabricante: CompanyInfo;
   empresaMontadora: CompanyInfo;
}

const typesInterfaces = document.querySelector('.typesInterfaces');

export async function fetchProduct() {
   const res = await fetch('https://api.origamid.dev/json/notebook.json');
   const data = await res.json();
   product(data);
}

function product(data: ProductInfos) {
   if (typesInterfaces)
      typesInterfaces.innerHTML += `
      <h3>${data.nome}</h3>
      <p>Valor: R$ ${data.preco}</p>
      <p>Descrição: ${data.descricao}</p>
   `;
}
