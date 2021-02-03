import React from 'react'
import { css } from '@emotion/core'

const styles = css`
.container {
  margin: 0 auto;
  width: 800px;
} 
.inputFields {
  display: flex;
}
`

class TransactionForm extends React.Component {
  formSubmit(event) {
    const transactions = [
      {
        'id': '5d5c1f747e01cd704f18f863',
        'user_id': 'employee4',
        'description': 'cleaningsupplies',
        'merchant_id': 'walmart',
        'debit': true,
        'credit': false,
        'amount': 150,
        '__typename': 'Transaction'
      },
      {
        'id': '5d5c1f747e01cd704f18f864',
        'user_id': 'employee3',
        'description': 'refund',
        'merchant_id': 'walmart',
        'debit': false,
        'credit': true,
        'amount': 250,
        '__typename': 'Transaction'
      },
      {
        'id': '5d5c1f747e01cd704f18f865',
        'user_id': 'employee5',
        'description': 'refund',
        'merchant_id': 'walmart',
        'debit': false,
        'credit': true,
        'amount': 100,
        '__typename': 'Transaction'
      }
    ]

    const transactionInput = {id: '', user_id: 'employee4', description: '', merchant_id: '', debit: bool, credit: bool}
  }

  render () {
    return (
      <div css={styles}>
        <div className='container'>
          <form>
            <div className='inputFields'>
              <div className='inputField'>
                <label htmlFor='description'>Description</label>
                <input id='description' type='text' value='transaction description' />
              </div>
              <div className='inputField'>
                <label htmlFor='merchantID'>Merchant</label>
                <input id='merchantID' type='text' value='merchant ID' />
              </div>
              <div className='inputField'>
                <label htmlFor='transactionType'>Transcation Type</label>
                <select id='transcationType' name='transactionType'>
                  <option selected value='null'>---</option>
                  <option value='debit'>Debit</option>
                  <option value='credit'>Credit</option>
                </select>
              </div>
              <div className='inputField'>
                <label htmlFor='transactionAmount'>Amount</label>
                <input id='transactionAmount' type='number' value='0.00' />
              </div>
            </div>
            <div>
              <button onClick={(e) => submitForm} type='button'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default TransactionForm
