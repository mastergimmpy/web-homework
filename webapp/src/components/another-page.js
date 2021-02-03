import React, { Fragment } from 'react'
import { css } from '@emotion/core'
import { useDebugCode } from './secretCodes/useDebugCode'

const styles = css`
.container {
  margin: 0 auto;
  width: 800px;
  text-align: center;
} 
`

export function AnotherRoute () {
  const sonic = useDebugCode()

  return (
    <Fragment>
      <div css={styles}>
        <div className='container'>
          <h1>Do you know the debug code for Sonic The Hedgehog?</h1>
          <div>
            { sonic ? <div><img alt='sonic gif' src='https://media.giphy.com/media/ZU54zyQ7OJQhW/giphy.gif' /></div> : <div><img alt='sonic gif' src='https://media.giphy.com/media/ErizhSwfQlDItcJpzw/giphy.gif' /></div> }
          </div>
        </div>
      </div>
    </Fragment>
  )
}
