
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useTranslation } from 'react-i18next';
const options = ['en', 'ru', 'uz'];

export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);

    setOpen(false);
    if (index == 0) {
      function t() {
        i18n.changeLanguage("en");
      };
      t()
    }
    else if (index == 1) {
      function t() {
        i18n.changeLanguage("ru");
      };
      t()
    }
    else if (index == 2) {
      function t() {
        i18n.changeLanguage("uz");
      };
      t()
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const { t, i18n } = useTranslation();


  return (
    <React.Fragment sx={{ color: "balck" }}>
      <ButtonGroup ref={anchorRef} aria-label="split button" sx={{ color: "black" }}>
        <Button onClick={handleClick} sx={{ border: "0px solid black", color: "black",width:"10px",fontSize:"14px" }}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          sx={{ border: "0px solid black", color: "black",width:"20px" }}
        >
          <ArrowDropDownIcon sx={{ color: "black", border: "0px solid black" }} />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
          color: "black"
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
            sx={{ color: "black" }}
          >
            <Paper sx={{ color: "black" }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      sx={{ color: "black" }}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
