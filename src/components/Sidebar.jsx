import React from "react";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Link = ({ to, title, icons }) => {
    return (
          <NavLink
            exact
            to={"/" + to}
            activeClassName="activeClicked"
        >
            <CDBSidebarMenuItem icon={ icons }>
                {title}
            </CDBSidebarMenuItem>
        </NavLink>
    )
}
const Sidebar = () => {
    return (
        <div
            style={{
                display: "flex",
                height: "cover",
                overflow: "scroll initial",
            }}
        >
            <CDBSidebar textColor="#fff" backgroundColor="#333">

                <CDBSidebarHeader prefix={<i className="fa fa-bars"></i>} >

                    <span className="text-decoration-none" style={{ color: "inherit" }}>Logo</span>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <Link to="dashboard" title="Dashboard" icons="columns" />
                        <Link to="referrals" title="Referrals" icons="user-friends"/>
                        <Link to="join" title="Join new Member" icons="user-plus"/>
                        <Link to="update" title="Update Profile" icons="users-cog"/>
                        <Link to="widthdrawl" title="Widthdrawl" icons="piggy-bank"/>
                        <Link to="transfer" title="Transfer" icons="exchange-alt"/>
                        <Link to="myteam" title="My Team" icons="users"/>
                        <Link to="report" title="Report" icons="chart-bar"/>
                        <Link to="logout" title="Log out" icons="power-off"/>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;
