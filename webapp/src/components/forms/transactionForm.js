import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

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
  constructor (props) {
    super(props)

    this.state = {
      transaction: [
        {
          id: '',
          user_id: 'employee4',
          description: '',
          merchant_id: '',
          debit: false,
          credit: false,
          amount: '',
          transactionType: ''
        }
      ]
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    this.setState({ transactionType: event.target.transactionType })
    console.log(this.state.transactionType)
    if (this.state.transactionType === '---') {
      this.setState({ debit: false, credit: false })
    } else if (this.state.transactionType === 'credit') {
      this.setState({ debit: false, credit: true })
    } else if (this.state.transactionType === 'debit') {
      this.setState({ debit: true, credit: false })
    } else {
      this.setState({ debit: false, credit: false })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.transaction)
    this.props.onSubmit(this.state.transaction)
  }

  render () {
    return (
      <div css={styles}>
        <div className='container'>
          <form onSubmit={this.handleSubmit}>
            <div className='inputFields'>
              <div className='inputField'>
                <label htmlFor='description'>Description</label>
                <input id='description' name='description' onChange={(e) => this.setState({ description: e.target.value })} type='text' value={this.state.description} />
              </div>
              <div className='inputField'>
                <label htmlFor='merchantID'>Merchant</label>
                <input id='merchantID' name='merchantId' onChange={(e) => this.setState({ merchant_id: e.target.value })} type='text' value={this.state.merchant_id} />
              </div>
              <div className='inputField'>
                <label htmlFor='transactionType'>Transcation Type</label>
                <select id='transcationType' name='transactionType' onBlur={this.handleChange} value={this.state.value}>
                  <option value='nill'>---</option>
                  <option value='debit'>Debit</option>
                  <option value='credit'>Credit</option>
                </select>
              </div>
              <div className='inputField'>
                <label htmlFor='transactionAmount'>Amount</label>
                <input id='transactionAmount' onChange={(e) => this.setState({ amount: e.target.value })} type='number' value={this.state.amount} />
              </div>
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

TransactionForm.propTypes = {
  onSubmit: PropTypes.func
}

export default TransactionForm
