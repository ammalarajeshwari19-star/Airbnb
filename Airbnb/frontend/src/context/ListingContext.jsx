import React from "react";
import { authDataContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const listingDataContext = React.createContext()

function ListingContext({children}){
    let navigate = useNavigate()
    let [listingData, setListingData] = React.useState([])
    let [title, setTitle] = React.useState(null)
    let [description, setDescription] = React.useState(null)
    let [frontEndImage1, setFrontEndImage1] = React.useState(null)
    let [frontEndImage2, setFrontEndImage2] = React.useState(null)
    let [frontEndImage3, setFrontEndImage3] = React.useState(null)
    let [backEndImage1, setBackEndImage1] = React.useState(null)
    let [backEndImage2, setBackEndImage2] = React.useState(null)
    let [backEndImage3, setBackEndImage3] = React.useState(null)
    let [rent, setRent] = React.useState(null)
    let [city, setCity] = React.useState(null)
    let [landmark, setLandmark] = React.useState(null)
    let [category, setCategory] = React.useState(null)
    let[adding,setAdding] = React.useState(false)
    
    let {serverUrl} = React.useContext(authDataContext)

    

    

    const handleAddListing = async () => {
        setAdding(true)
        try {
            let formData = new FormData()
            formData.append('title', title)
            formData.append('description', description)
            formData.append('image1', backEndImage1)
            formData.append('image2', backEndImage2)
            formData.append('image3', backEndImage3)
            formData.append('rent', rent)
            formData.append('city', city)
            formData.append('landmark', landmark)
            formData.append('category', category)
            
            let result = await axios.post(serverUrl + '/api/listings/add', formData,
                {withCreditials: true})
            setAdding(false)
            console.log(result)
            navigate('/')
            
        } catch (error) {
            setAdding(false)
            console.error('Error adding listing:', error);
        }
    }

    const getListing = async () => {
        try {
            let result = await axios.get(serverUrl + '/api/listings/get',{withCredentials: true})
            setListingData(result.data)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    let value = {
        listingData,
        setListingData,
        title,
        setTitle,
        description,
        setDescription,
        frontEndImage1,
        setFrontEndImage1,
        backEndImage1,
        setBackEndImage1,
        backEndImage2,
        setBackEndImage2,
        backEndImage3,
        setBackEndImage3,
        rent,
        setRent,
        city,
        setCity,
        landmark,
        setLandmark,
        category,
        setCategory,
        handleAddListing,
        adding,setAdding,
        listingData,
        setListingData,
        
    }

    return(
        <div>
            <listingDataContext.Provider value={value}>
                
                {children}
            </listingDataContext.Provider>
        </div>
    )
}

export default ListingContext