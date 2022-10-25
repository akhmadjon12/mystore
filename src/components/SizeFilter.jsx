import React, { useState } from 'react';
import '../styles/components/allFilters.css';

const SizeFilter = props => {

    const { sizes, changeSize } = props;
    const [activeList, setActiveList] = useState(-1);

    return (
        <div className="size-card">
            <h4>SIZE</h4>

            <ul className='size-list'>
                {sizes.map( (size, index) => 
                    <li key={size} 
                        onClick={() => {setActiveList(index); changeSize(size)}}
                        className={activeList === index ? 'active' : ''}>
                            {size}
                    </li>)
                }
            </ul>
            <div className="clr"></div>
        </div>
    );
}

export default SizeFilter;