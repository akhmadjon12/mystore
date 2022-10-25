import React, { useContext } from 'react';
import { DB } from '../context/database';
import Card from '../components/Card';

function LikedOnesPage() {
    const { database } = useContext(DB)
    const likedProducts = database.filter(item => item.isLiked);

    if (likedProducts.length > 0)
        return (
            <div className="liked-ones-page">
                <div className="container">
                    <h2>Liked Products ({likedProducts.length} items)</h2>
                    <div className="row">
                        {likedProducts.map(item =>
                            <div className="col-md-3 p-3">
                                <Card data={item} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    else return (
        <div className="liked-ones-page">
            <div className='container' style={{ paddingBottom: '23.5vh' }}>
                <h2><i className="fas fa-info" style={{marginRight: 20, color: 'red'}}></i>  You have no LIKEd items yet!</h2>
            </div>
        </div>
    )
}

export default LikedOnesPage;