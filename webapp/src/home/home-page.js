import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import GetTransactions from '../gql/transactions.gql'
import { useKonamiCode } from '../components/secretCodes/useKonamiCode'
import FormHandler from '../components/forms/formHandler'

export function Home () {
  const { loading, error } = useQuery(GetTransactions)
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
      <FormHandler />
      <div>
        { konami ? <div className='gifDisplay'><img alt='conta gif' src='https://media.giphy.com/media/DpXqHdILXRRDi/giphy.gif' /></div> : <div /> }
      </div>
    </Fragment>
  )
}
