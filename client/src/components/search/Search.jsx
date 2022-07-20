import React, { useState } from 'react'
import Back from '../common/Back'
import Header from '../common/header/Header'
import img from '.././img/explore3.jpg'
import "./search.css"
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom'
import SearchItem from '../searchItem/SearchItem'
const Search = () => {

  const location = useLocation()
  const [destination,setDestination] =useState(location.state.destination)
  const [value,setValue] =useState(location.state.value)
  const [options, setOptions] =useState(location.state.options)
  
  return (
    <>

     <Header/>
     <div className="search mb">
      <Back name='Search List' title='Outplace Search List' cover={img}/>
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className='listTitle'>OutPlace</h1>
              <div className="listItem">
                <label>Destination</label>
                <input type="text" placeholder={destination}  />
              </div>
              <div className="listItem">
                <label>Check-in Date</label>
                  <span>
                  <LocalizationProvider className='date-input'
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
                  </span>
              </div>
              <div className="listItem">
                <label>Options</label>
                <div className="listOptions">
                <div className="listOptionItem">
                <span className='listOptionText'>
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className='listOptionInput'/>
                </div>
                <div className="listOptionItem">
                  <span className='listOptionText'>
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className='listOptionInput'/>
                </div>
                <div className="listOptionItem">
                  <span className='listOptionText'>
                    Adult
                  </span>
                  <input type="number" min={1} className='listOptionInput' placeholder={options.adult}/>
                </div>
                <div className="listOptionItem">
                  <span className='listOptionText'>
                      Children
                  </span>
                  <input type="number" min={1}  className='listOptionInput' placeholder={options.children}/>
                </div>
                <div className="listOptionItem">
                  <span className='listOptionText'>
                    Room
                  </span>
                  <input type="number" min={1} className='listOptionInput' placeholder={options.room}/>
                </div>
              </div>
            </div>
            <button>Search</button>
            </div>
            <div className="listResult">
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
            </div>
          </div>
        </div>
     </div>
    
    </>
  )
}

export default Search