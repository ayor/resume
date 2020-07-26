import * as actionTypes from './actions';
import eRental from '../assets/eRental.PNG';
import eRental_Checkout from '../assets/eRental_Checkout.PNG';
import Felt from '../assets/FELT.PNG';
import FeltTest from '../assets/test.PNG';

const initialState = {
    showSideNav: false,
    projects: [
        {
            name: 'Interested In E-Commerce? Check out eRental',
            pathname: '/portfolio/eRental',
            Description: "This project was a Demo e-commerce web application built to give a deep dive into Vue javascript framework. The project process flow enables a user interested in movies available in the eRental store to rent movies, add them to a cart and order the selected movies for a delivery. The homepage shows a collection of movies, details and pricing while displaying the trailer of each movie.This solution uses Vuex for state management, Axios for async get/ post to the api - endpoints, Routing to have a multipage feel in a single page application and Transitions to manage animations. ", 
            imgSrc : eRental,
            imgSrc1 : eRental_Checkout,
        imgSrc2 : null,
        projectLink: 'http://video-rental-store.s3-website.eu-west-2.amazonaws.com'
        },
    {
        name: 'Want to see somthing cool about Education?? Why not try out FELT Teachers',
        pathname: '/portfolio/felt-teachers',
        Description: "This application was built to help bring together skilled individuals and young students together to help prepare these students for the highly competitive job market.The tool has a test page where it leverages a question API to test the competence of the skilled personnel.The was built using React javasscipt Framework and was built as a submission to the BuildForSDG challenge organized by Andela and Facebook.This solution uses Api Context for state management, Axios for async get/post to the api-endpoints, react-router to have a multipage feel in a single page.",
        imgSrc: Felt,
        imgSrc1: null,
        imgSrc2: FeltTest,
        projectLink:'https://felt-teachers.netlify.app/'
        },
    {
        name: 'eRental WebAPI',
        pathname: '/portfolio/4',
        Description: "This solution was built to provide Rest Api servcies to the eRental Frontend application.The solution was built with the DotNet Core framework (C#).Utilizing the MVC framework to manage requests, JSON Web Token (JWT)  was leveraged to manage authentication and Entity Framework to perform CRUD operations to the database",
        projectLink:'https://videorentalapp.azurewebsites.net/api/v1'
        },
    {
        name: 'E-Drugs',
        pathname: '/portfolio/3',
        Description: 'Watch this space for my next amazing project :)'
        }
    ]

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_SIDEDRAWER:
            let toggledSideNav = !state.showSideNav
            return {
                ...state,
                showSideNav: toggledSideNav
            }
        default:
            break;
    }
    return state;
}

export default reducer;