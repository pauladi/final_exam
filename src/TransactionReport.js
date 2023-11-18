import React from 'react';

const TransactionReport = ({ transactions, products }) => {

  // A utility function to get product name by ID
  const getProductNameById = (productId) => {
    const product = products.find(product => product.id === productId);
    return product ? product.name : 'Unknown Product';
  };

  return (
    <div>
      <h2>Transaction Report</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.id || index}</td>
              <td>{getProductNameById(transaction.productId)}</td>
              <td>{transaction.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionReport;
