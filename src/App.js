import React, { useState, useEffect } from 'react';
import './style.css';
import styled from 'styled-components';

const Container = styled.div``;

const Wrapper =  styled.div`
  display: grid;
  grid-template-columns: repeat(${props =>props.rows ?  `${props.rows}` : '3'}, 1fr);
  gap: ${props => props.gap ? `${props.gap}px` : '10px'};
  grid-auto-rows: minmax(100px, auto);
  background: gray;
  padding: 10px;
`
const Grid = styled.div`
  background: lightgray;
  padding: 10px;
  cursor: cell
`

export default function App() {
  const [ rows,setRows ] = useState(0);
  const [ box, setBoxItem ] = useState(10);
  const [ gap, setGap ] = useState(0);
  return <Container>

    <h4>Rows : {rows}</h4>
    <input type="range" value={rows}  min="0" max="12" onChange={(e)=>setRows(e.target.value)}/>
    <br/>
    <h4>Box : {box}</h4>
    <input type="range" value={box}  min="0" max="100" onChange={(e)=>setBoxItem(e.target.value)}/>
    <br/>
    <h4>Gap : {gap}</h4>
    <input type="range" value={gap}  min="0" max="50" onChange={(e)=>setGap(e.target.value)}/>
    <Wrapper gap={gap} rows={rows} onSelect>
      {Array.from(Array(Number(box)).keys()).map((item,key)=>(
         <Grid data-id={item} key={key}>{item+1}</Grid>
      ))}
    </Wrapper>
  </Container>;
}
