import React from 'react';
// import data from '../../epicure.json';
import './RestaurantsPage.css'
import HomeCard from '../General/HomeCard/HomeCard';
import NavBar from '../NavBar/NavBar';
import FilterBarByNew from '../General/FilterBarByNew/FIlterBarByNew';
import FilterBarByPrice from '../General/FilterBarByPrice/FilterBarByPrice'
import Footer from '../General/Footer/Footer';
import { useSelector } from "react-redux";
import { RootState } from '../../store/Store';
import { Restaurant } from '../../Interfaces'
import { useNavigate } from 'react-router-dom';


const RestaurantsPage: React.FC= () => {
    const AllRestaurants = useSelector(
        (state:RootState) => state.restaurants.value
    );
    const navigate = useNavigate();
    const restaurantsCards = AllRestaurants.map((restaurant:Restaurant) =>{
        return <HomeCard 
        onClick={()=> navigate("/chefs")}
        class='one-restaurant'
        ImgSrc={require(`../../${restaurant.image}`)} 
        ImgAlt={restaurant.name}  
        name={restaurant.name} 
        chefName={restaurant.chefName} 
        moreInfoSrc={require(`../../assets/icon/star${restaurant.rating}.svg`)}
      />
    })
    return (
        <div>
            <NavBar />
            <FilterBarByNew />
            <FilterBarByPrice />
            <div className='restaurants-container'>
                {restaurantsCards}
            </div>
            <Footer />
        </div>
    )
}
export default RestaurantsPage;