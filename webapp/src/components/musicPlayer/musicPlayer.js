import React from 'react'
import { css } from '@emotion/core'

const styles = css`
 .container {
   display: flex;
   justify-content: center;
 }
 table {
   border-collapse: collapse;
   width: 100%;
 }
 td, th {
   border: none;
   padding: 10px;
 }
 .header {
   font-weight: bold;
 }
 tr:not(:first-of-type):hover {
   background-image: linear-gradient(90deg, #c53494, #3b94a3);
   background-repeat: no-repeat;
   background-size: 105%;
   transition: all 300ms ease-out;
 }
 tr:not(:first-of-type):hover td {
   color: #ffffff;
   font-weight: bold;
 }
 .mainInfo {
   display: flex;
   padding: 15px;
   margin: 0 15px;
 }
 .albumImage img {
   width: 50%;
   height: auto;
 }
 .albumInfo {
   display: flex;
   flex-direction: column;
 }
 .playerControls {
   display: flex;
   flex-direction: row;
   justify-content: center;
 }
 .playerButtons {
   display: flex;
 }
 .button.play {
   box-sizing: border-box;
   width: 74px;
   height: 74px;
   border-style: solid;
   border-width: 37px 0 37px 74px;
   border-color: transparent transparent transparent #202020;
 }
 .button.pause {
   width: 74px;
   height: 74px;
   border-style: double;
   border-width: 0 0 0 37px;
   border-color: #202020;
 }
`

const MusicPlayer = () => {
  return (
    <div css={styles}>
      <div className='ui container'>
        <div className='musicePlayer'>
          <div className='sidebar' />
          <div className='mainPlayer'>
            <div className='topBanner'>
              <div className='mainInfo'>
                <div className='albumImage'>
                  <img alt='Album Art' src='https://upload.wikimedia.org/wikipedia/en/6/6a/Sabaton_-_The_Last_Stand_cover.jpg' />
                </div>
                <div className='albumInfo'>
                  <div className='albumTitle'>
                    <h1>The Last Stand</h1>
                  </div>
                  <div className='albumInfo'>
                    <h3><span className='artistName'>Sabaton</span> - <span className='albumYear'>2016</span> - <span className='songCount'>13</span> - <span className='albumDuration'>44 min 36 sec</span></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='songList'>
              <table>
                <tbody>
                  <tr className='header'>
                    <td >#</td>
                    <td >Title</td>
                    <td >Artist</td>
                    <td >Album</td>
                    <td >Time</td>
                  </tr>
                  <tr>
                    <td >1</td>
                    <td >Sparta</td>
                    <td >Sabaton</td>
                    <td >The Last Stand</td>
                    <td >4:24</td>
                  </tr>
                  <tr>
                    <td >2</td>
                    <td >Last Dying Breath</td>
                    <td >Sabaton</td>
                    <td >The Last Stand</td>
                    <td >3:22</td>
                  </tr>
                  <tr>
                    <td >3</td>
                    <td >Blood of Bannockburn</td>
                    <td >Sabaton</td>
                    <td >The Last Stand</td>
                    <td >2:54</td>
                  </tr>
                  <tr>
                    <td >4</td>
                    <td >Diary of an Unknown Solider</td>
                    <td >Sabaton</td>
                    <td >The Last Stand</td>
                    <td >0:52</td>
                  </tr>
                  <tr>
                    <td >5</td>
                    <td >The Lost Battalion</td>
                    <td >Sabaton</td>
                    <td >The Last Stand</td>
                    <td >3:35</td>
                  </tr>
                  <tr>
                    <td >6</td>
                    <td >Rorke&apos;s Drift</td>
                    <td >Sabaton</td>
                    <td >The Last Stand</td>
                    <td >3:26</td>
                  </tr>
                  <tr>
                    <td >7</td>
                    <td >The Last Stand</td>
                    <td >Sabaton</td>
                    <td >The Last Stand</td>
                    <td >3:55</td>
                  </tr>
                  <tr>
                    <td >8</td>
                    <td >Hill 3234</td>
                    <td >Sabaton</td>
                    <td >The Last Stand</td>
                    <td >3:28</td>
                  </tr>
                  <tr>
                    <td >9</td>
                    <td >Shiroyama</td>
                    <td >Sabaton</td>
                    <td >The Last Stand</td>
                    <td >3:33</td>
                  </tr>
                  <tr>
                    <td >10</td>
                    <td >Winged Hussars</td>
                    <td >Sabaton</td>
                    <td >The Last Stand</td>
                    <td >3:51</td>
                  </tr>
                  <tr>
                    <td >11</td>
                    <td >The Last Battle</td>
                    <td >Sabaton</td>
                    <td >The Last Stand</td>
                    <td >4:24</td>
                  </tr>
                  <tr>
                    <td >12</td>
                    <td >Camouflage - Bonus</td>
                    <td >Sabaton</td>
                    <td >The Last Stand</td>
                    <td >3:56</td>
                  </tr>
                  <tr>
                    <td >13</td>
                    <td >All Guns Blazing - Bonus</td>
                    <td >Sabaton</td>
                    <td >The Last Stand</td>
                    <td >4:03</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='playerControls'>
              <div className='playerButtons'>
                <div className='playButton'>
                  <button className='button play' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer
