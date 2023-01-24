import React from 'react';

const Products = ({ data }) => {
   const [infoData, setInfoData] = React.useState(null);

   React.useEffect(() => {
      if (data !== null) {
         fetch(`https://ranekapi.origamid.dev/json/api/produto/${data}`)
            .then((res) => res.json())
            .then((json) => setInfoData(json));
      }
   }, [data]);

   if (infoData === null) return null;
   return (
      <>
         <h2>{infoData.nome}</h2>
         <p>Valor: R$ {infoData.preco}</p>
         <p>Descrição: {infoData.descricao}</p>
      </>
   );
};

export default Products;
