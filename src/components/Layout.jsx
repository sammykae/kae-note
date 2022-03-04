import {
	AppBar,
	CssBaseline,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	Toolbar,
	Typography,
	ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
const drawerWidth = 200;
const Layout = ({ children, window }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const activeStyle = {
		background: "#000000",
		color: "#ffffff",
		"&:hover": {
			color: "#000000",
		},
	};

	const meniItems = [
		{
			text: "My Notes",
			icon: <SubjectOutlined color="secondary" />,
			path: "/",
		},
		{
			text: "Create Note",
			icon: <AddCircleOutlineOutlined color="secondary" />,
			path: "/create",
		},
	];
	const drawer = (
		<div>
			<Toolbar>
				<Typography variant="h6" color={"primary"}>
					Kae Notes
				</Typography>
			</Toolbar>
			{/* <Divider /> */}
			<List>
				{meniItems.map((item) => (
					<ListItem
						button
						key={item.text}
						sx={location.pathname === item.path ? activeStyle : null}
						onClick={() => {
							navigate(item.path);
							setMobileOpen(false);
						}}
					>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText primary={item.text} />
					</ListItem>
				))}
			</List>
		</div>
	);
	const container =
		window !== undefined ? () => window().document.body : undefined;
	return (
		<div>
			{/* App bar */}

			<div className="layout">
				<Box sx={{ display: "flex" }}>
					<CssBaseline />
					<div className="appbar">
						<AppBar
							position="fixed"
							sx={{
								width: { sm: `calc(100% - ${drawerWidth}px)` },
								ml: { sm: `${drawerWidth}px` },
							}}
						>
							<Toolbar>
								<IconButton
									color="inherit"
									aria-label="open drawer"
									edge="start"
									onClick={handleDrawerToggle}
									sx={{ mr: 2, display: { sm: "none" } }}
								>
									<MenuIcon />
								</IconButton>
								<Typography variant="h6" noWrap component="div">
									Kae Notes with Material UI
								</Typography>
							</Toolbar>
						</AppBar>
					</div>

					<div className="sidebar">
						<Box
							component="nav"
							sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
							aria-label="mailbox folders"
						>
							{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
							<Drawer
								container={container}
								variant="temporary"
								open={mobileOpen}
								onClose={handleDrawerToggle}
								ModalProps={{
									keepMounted: true, // Better open performance on mobile.
								}}
								sx={{
									display: { xs: "block", sm: "none" },
									"& .MuiDrawer-paper": {
										boxSizing: "border-box",
										width: drawerWidth,
									},
								}}
							>
								{drawer}
							</Drawer>
							<Drawer
								variant="permanent"
								sx={{
									display: { xs: "none", sm: "block" },
									"& .MuiDrawer-paper": {
										boxSizing: "border-box",
										width: drawerWidth,
									},
								}}
								open
							>
								{drawer}
							</Drawer>
						</Box>
					</div>
					<Box
						component="main"
						sx={{
							flexGrow: 1,
							p: 3,
							width: { sm: `calc(100% - ${drawerWidth}px)` },
						}}
					>
						<Toolbar />
						<div
							style={{
								background: "#f9f9f9",
								width: "100%",
							}}
						>
							{children}
						</div>
					</Box>
				</Box>
			</div>
		</div>
	);
};

export default Layout;
