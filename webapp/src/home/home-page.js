import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import GetTransactions from '../gql/transactions.gql'
import { TxTable } from '../components/transactions/TxTable'
import { useKonamiCode } from '../components/secretCodes/useKonamiCode'

export function Home () {
  const { loading, error, data = {} } = useQuery(GetTransactions)
  const konami = useKonamiCode()

  if (loading) {
    return (
      <Fragment>
        Loading...
      </Fragment>
    )
  }

  if (error) {
    return (
      <Fragment>
        ¯\_(ツ)_/¯
      </Fragment>
    )
  }

  return (
    <Fragment>
      <TxTable data={data.transactions} />
      <div>
        { konami ? <div className='gifDisplay'><img alt='conta gif' src='https://media.giphy.com/media/DpXqHdILXRRDi/giphy.gif' /></div> : <div /> }
      </div>
    </Fragment>
  )
}
