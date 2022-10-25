import React, { useContext } from 'react';
import { DB } from '../context/database.js' ;
import '../styles/components/Main.css'
import Card from './Card.jsx';


function Main () {
    const { database } = useContext(DB);

    return ( 
        <main>
            <div className="container">

                <h3>Shop your style</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus at quidem consequatur qui est in architecto expedita, ad neque labore aliquid blanditiis ratione nulla obcaecati quos voluptatem laboriosam adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, ipsa. Lorem ipsum.</p>

                <div className="row">
                    {database.map( item => (
                    <div className="col-md-3 p-3" key={item.id}>
                        <Card data={item} /> 
                    </div>
                    ))}
                </div>


            </div>
        </main> 
    );
}

export default Main ; 