import React from 'react'
import { styled } from 'styled-components'


const Style = styled.div`
background-color:pink;

ul{
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

`

function Styled() {
  let Menu = ["메뉴1","메뉴2","메뉴3","메뉴4","메뉴5"]
  return (
    <Style >
      <ul>
        {Menu.map((el,i)=>{
          return(
            <li className='py-10' key={i}>{el}</li>

          )

        })}
        
      </ul>

    </Style>
  )
}

export default Styled