import React from 'react'
import TransactionForm from './transactionForm'
import { TxTable } from '../transactions/TxTable'
import { v4 as uuid4 } from 'uuid'
import { transactions } from '../transactions/transactions-data'

class FormHandler extends React.Component {
  state = {
    id: '',
    user_id: '',
    description: '',
    merchant_id: '',
    debit: false,
    credit: false,
    amount: '',
    '__typename': 'Transaction'
  }

  onFormSubmit = async (userId, description, merchantId, debit, credit, amount) => {
    const generateID = uuid4()
    this.setState({ id: generateID, user_id: userId, description: description, merchant_id: merchantId, debit: debit, credit: credit, amount: amount })
    // const tx = this.state
  }

  render () {
    return (
      <div>
        <TransactionForm onSubmit={this.onFormSubmit} />
        <TxTable data={transactions} />
      </div>
    )
  }
}

export default FormHandler
