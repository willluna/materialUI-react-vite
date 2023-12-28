import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";


export default function Navbar(){
    
    const [open, setOpen] = useState(false)

    return(
        <>
            <Button variant="contained" onClick={() => setOpen(true)}>Open Drawer</Button>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
            >
            <NavListDrawer/>
            </Drawer> 
        </>
    )
}