import React from 'react'
import CapsTemplate from '../../../Components/CapsTemplate/CapsTemplate';

const FinicalCapital = () => {
    const values = [
        { val1: '₹20,969 crores', val2: 'Revenue from Operations' },
        { val1: '₹4,453 crores', val2: 'Employee wages and benefits' },
        { val1: '₹476 crores', val2: 'Dividend' },
        { val1: '₹4,230 crores', val2: 'EBITDA' },
      ];
  return (
    <div className=' mt-[80px]'>
            <CapsTemplate src={'./Buisness/01 BAJAJ Electricals_11.07.2024.jpg'} title={"Financial"} values={values} theme={"#3d85c6"} gradient={"#3d85c6"} ico={"./Homepage/fin-icon1.svg"} />

    </div>
  )
}

export default FinicalCapital
