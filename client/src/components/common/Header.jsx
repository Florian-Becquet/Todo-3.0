import React, { useEffect, useState } from 'react'
import '../../assets/styles/common/Header.css'

// Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TodoForm from '../../pages/dashboard/TodoForm';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import MenuIcon from '@mui/icons-material/Menu';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Sidebar from './Sidebar';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useGlobalState } from '../../redux/store';
import dayjs from 'dayjs';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);


  const todos = useGlobalState('todos');
  const loading = useGlobalState('loading')

  // const hoursLeft = () => {
  //   let hours = [];
  //   todos.map((todo) => {
  //       {
  //         todo.map((td) => {
  //           console.log(td);
  //         })
  //         const hour =  Math.round(((dayjs(todo.date) - dayjs(new Date())) / 3_600_000) * 60);
  //         if(hour > 0 && hour < 60) {
  //           hours.push(todo)

  //         }
  //       }

  //     })
  //   return hours
  // }
  // const hh = hoursLeft();
  // console.log(hh);

  
  const active = showMobileMenu ? 'active' : '';
  const disable = loading[0] || active ? 'disable' : '';

  return (
    <header>
      <TodoForm showNav={showNav} setShowNav={setShowNav} />
      <Sidebar showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
      <div className='header__home'>
        {showMobileMenu ?
          <CloseOutlinedIcon className={`hide__lg ${active}`} onClick={() => setShowMobileMenu(!showMobileMenu)} />
          :
          <MenuOutlinedIcon className={`hide__lg ${active}`} onClick={() => setShowMobileMenu(!showMobileMenu)} />
        }

        <Link to="/"><HomeOutlinedIcon /></Link>
      </div>
      <div className='header__notifications'>
        <button disabled={loading[0] || active ? true : false} onClick={() => setShowNav(!showNav)}><AddOutlinedIcon className={disable}  /></button>
        <NotificationsNoneOutlinedIcon className='opacityLow' />
        <SettingsOutlinedIcon className='opacityLow' />
      </div>
    </header>
  )
}

export default Header