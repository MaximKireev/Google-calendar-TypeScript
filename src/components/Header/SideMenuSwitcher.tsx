import React from "react";
import { useDispatch } from "react-redux";
import { MenuOutlined } from "@ant-design/icons";
import { toggleMenu } from "../../redux/ui-events/ui-events-actions";

export const SideMenuSwitcher = () => {
    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => dispatch(toggleMenu())} className="burger-menu">
                <MenuOutlined />
            </button>
        </>
    );
};
