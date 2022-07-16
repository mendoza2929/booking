import React from 'react'
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import Box from '@mui/material/Box';
import {AiOutlineSearch} from 'react-icons/ai'
import Heading from '../common/Heading';
const Hero = () => {
    const [value, setValue] = React.useState([null, null]);
  return (
    <>
        <section className="hero">
            <div className="container">
                    <Heading title='Find your future house' subtitle='Discover new and highlighted properties in your city.' />
                <form action="" className='flex'>
                    <div className="box">
                        <span>City/Street</span>
                        <input type="text" placeholder='Where are you going?'/>
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
                    <button className='btn'>
                        <i><AiOutlineSearch/></i> Advance Filter
                    </button>
                  
                </form>
            </div>
        </section>
    </>
  )
}

export default Hero