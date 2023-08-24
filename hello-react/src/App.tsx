import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click Me {count}
        </button>
      
        <p>
          Phuthanet Mekpayom 6211850006
        </p>
        <button onClick={() => setCount((count) => count + 50)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
      ที่อยู่: 140 ถนน เชื่อมสัมพันธ์ แขวงกระทุ่มราย เขตหนองจอก กรุงเทพมหานคร 10530 ไทย
      เวลาทำการ: 
      เปิด ⋅ ปิด 17:00 น.
      โทรศัพท์: +66 2 988 3666
      ก่อตั้ง: 27 กุมภาพันธ์ 2533
      ผู้ก่อตั้ง: สิทธิชัย โภไคยอุดม
      คติพจน์: ความรู้คือพลัง
      ชื่อย่อ: มทม. / MUT
      ที่ตั้ง: 140 ถนนเชื่อมสัมพันธ์ แขวงกระทุ่มราย เขตหนองจอก กรุงเทพมหานคร 10530
      นายกสภาฯ: ศาสตราจารย์ ดร.สิทธิชัย โภไคยอุดม
      สถาปนา: 27 กุมภาพันธ์ พ.ศ. 2533 (33 ปี)
      </p>
    </>
  )
}

export default App
