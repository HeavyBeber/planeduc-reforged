import * as React from 'react';
import { ArrowRight, Settings } from "@mui/icons-material"
import { IconButton, Menu, MenuItem } from "@mui/material"

function CustomerListMenu(props, value) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const setCustomerCallback = () => props.setCustomerCallback(props.customer)

    const handleMenuItemClick = (value) => {
        setCustomerCallback();
        setAnchorEl(null);
    };


    
    const menuId = `menu-label-${value}`;
    const buttonId = `icon-button-${value}`;

    return (
        <div><IconButton
            id = {buttonId}
            aria-controls={open ? {menuId} : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            size="large"
            sx={{
            '& svg': {
                color: 'rgba(0,0,0,0.8)',
                transition: '0.2s',
                transform: 'translateX(0) rotate(0)',
            },
            '&:hover, &:focus': {
                bgcolor: 'unset',
                '& svg:first-of-type': {
                transform: 'translateX(-4px) rotate(-20deg)',
                },
                '& svg:last-of-type': {
                right: 0,
                opacity: 1,
                },
            },
            '&:after': {
                content: '""',
                position: 'absolute',
                height: '80%',
                display: 'block',
                left: 0,
                width: '1px',
                bgcolor: 'divider',
            },
            }}
        >
            <Settings />
            <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
        </IconButton>
        <Menu
            id={menuId}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': {buttonId},
            }}
        >
            <MenuItem onClick={(value) => handleMenuItemClick(value)}>Modifier</MenuItem>
            <MenuItem onClick={(value) => handleMenuItemClick(value)}>Payer des cours</MenuItem>
            <MenuItem onClick={(value) => handleMenuItemClick(value)}>Supprimer</MenuItem>
        </Menu>
        </div>
)
}

export { CustomerListMenu }