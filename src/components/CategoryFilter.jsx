import React, { useState } from 'react';
import '../styles/components/allFilters.css';

function CategoryFilter (props) {
    const { categories, handleClick } = props;
    const [ activeCategory, setActiveCategory ] = useState(0);

    return (
        <div className="category-card" >
            <h4>CATEGORY</h4>

            <ul className='category-list'>
                {categories.map((category, index) => (
                    <li key={category} onClick={() => {handleClick(category); setActiveCategory(index)} }
                        className={activeCategory === index ? "active" : ''}>
                        {category}
                    </li>)
                )}
            </ul>
        </div>
    );
}

export default CategoryFilter;