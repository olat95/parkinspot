import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarLinkRoute,
} from './SidebarElement'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='workings'>How it works</SidebarLink>
          <SidebarLink to='homeowner'>For Homeowners</SidebarLink>
          <SidebarLink to='customers'>For Customers</SidebarLink>
          <SidebarLink to='payment'>Payment Plan</SidebarLink>
          <SidebarLink to='offers'>Services</SidebarLink>
          <SidebarLinkRoute to='/signup'>Signup</SidebarLinkRoute>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
