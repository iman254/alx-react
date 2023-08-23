import './footer.css';
import React from 'react';
import { getFullYear, getfooterCopy } from "../utils/utils";

export default function Footer() {
    return (
        <div className='footer'>
            <p>Copyright {getFullYear()}- {getfooterCopy()}</p>
      </div>
    )
    
}