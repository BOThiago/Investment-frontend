import React from "react";
import Cookies from "js-cookie";
import {
    Box,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
} from "@mui/material";

export default function UserDropdown() {
    const settings = ["Profile", "Account", "Dashboard", "Logout"];

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const picture = Cookies.get("picture");
    const username = Cookies.get("name");

    return (
        <>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <img
                            src={picture}
                            alt={username}
                            width={50}
                            className="rounded-full"
                        />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: "65px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography flex={1} textAlign="center">
                                {setting}
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </>
    );
}
