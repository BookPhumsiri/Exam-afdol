import React from 'react'
import { BlockMath } from 'react-katex'

function Home() {
  return (
    <div>
        <h1> การคำนวณกำไร/ ขาดทุนเป็นเปอร์เซ็นต์</h1>
        <p>สูตรมีดังนี้</p>
        <BlockMath math="เปอร์เซ็นต์กำไร/ขาดทุน = \frac{ราคาขาย - ราคาทุน \times 100}{ราคาทุน}"/>
    </div>
    
  )
}

export default Home