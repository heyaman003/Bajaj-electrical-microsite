import React from 'react';
import './CapsTemplate.css';

const CapsTemplate01 = ({ src, title, gradient, ico }) => {
    return (
        <div
            className='caps-template'
            style={{ backgroundImage: `url(${src})` }}
        >
            <div className='caps-marginal' style={{
              backgroundImage: `linear-gradient(to left, transparent, ${gradient})`
            }}>
                <div className='caps-main-title'>
                    <h1>{title}</h1>
                    {/* <h2 className='capitalh2'>Capital</h2> */}
                    <div className='absolute bottom-[10%]  '>
                        <img className='object-contain w-[30%]' src={ico} alt="" />
                    </div>
                    
                </div>
            </div>
            <div className='cap-values-overlay' >
            {/* <div className='cap-data'>
                        <h3 className='cap-data-title'>Value created and distributed</h3>
                        <div className='cap-data-row'>
                            {values.map((value, index) => (
                                <div key={index} className='cap-data-cell'>
                                    <h2 className='cap-val' style={{backgroundColor: theme}}>{value.val1}</h2>
                                    <p className='cap-desc'>{value.val2}</p>
                                </div>
                            ))}
                        </div>
                    </div> */}
            </div>
        </div>
    );
};

export default CapsTemplate01;
