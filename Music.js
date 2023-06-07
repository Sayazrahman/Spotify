
import React from 'react'

import { CDBProgress, CDBContainer} from "cdbreact";
export default function Music() {
  return (
    <div className="music" style={{width: '100vw',height: '19vh',marginTop: '29vh',display: 'flex', justifyContent: 'center', alignItems: 'center',scrollBehavior: 'smooth'}}>

              <CDBProgress value={50} text={``} style={{width: '70%'}}/>

    </div>
  )
}
