import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import Box from '@mui/material/Box';
import {AiOutlineSearch} from 'react-icons/ai'
import Heading from '../common/Heading';
import { useNavigate } from 'react-router-dom';
import Header from '../common/header/Header';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
const Hero = () => {
    const [value, setValue] = React.useState([null, null]);
    const [destination,setDestination] = useState("")
    const [openOptions,setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1,
    });


    const handleOption = (name,operation)=>{
        setOptions((prev) =>{
            return {
           ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1 ,
        }})
    }


    
    const {dispatch} = useContext(SearchContext)

    const navigate = useNavigate()

    const {user} = useContext(AuthContext)



    const handleSearch =()=>{
        dispatch({type:"NEW_SEARCH" , payload:{destination,value,options}})
        navigate("/hotels",{state:{destination,value,options}})
    }

    
  return (
    <>
        <Header/>
        <section className="hero">
            <div className="container">
                    <Heading title='Find your future house' subtitle='Discover new and highlighted properties in your city.' />
                <div className='form flex'>
                    <div className="box">
                        <span>City/Street</span>
                        <input type="text" placeholder='Where are you going?'
                        onChange={e=>setDestination(e.target.value)}
                        />
                    </div>
                    <div className="box">
                    <span>Check Availability</span>
                         <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        localeText={{ start: 'Check-in', end: 'Check-out' }}
                        >
                        <DateRangePicker
                            value={value}
                            onChange={(newValue) => {
                            setValue(newValue);
                         
                     
                            }}
                            renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField {...startProps} />
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps} />
                            </React.Fragment>
                            )}
                        />
                        </LocalizationProvider>
                    </div>
                    <div className="box">
                        <span onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} adult ${options.children}  children ${options.room} room`}</span>
                       {openOptions && <div className="options">
                           
                            <div className="optionItem">
                                <span className='optionText'>Adult</span>
                                <div className="optionCounter">
                                <button disabled={options.adult <=1} className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterButton"onClick={()=>handleOption("adult","i")}>+</button>
                                 </div>
                            </div>
                            <div className="optionItem">
                                <span  className='optionText'>Children</span>
                                <div className="optionCounter">
                                <button disabled={options.children <=0} className="optionCounterButton"onClick={()=>handleOption("children","d")}>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterButton"onClick={()=>handleOption("children","i")}>+</button>
                            </div>
                            </div>
                            <div className="optionItem">
                                <span  className='optionText'>Room</span>
                                <div className="optionCounter">
                                <button disabled={options.room <=1} className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterButton"onClick={()=>handleOption("room","i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                 
             
                    <button className='btn'onClick={handleSearch}>
                        <i><AiOutlineSearch/></i> Advance Filter
                    </button>
                   
                  
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero