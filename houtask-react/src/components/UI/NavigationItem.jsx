import React, {useEffect, useContext, useRef} from "react"
import { useNavigate } from "react-router-dom"
import { activePageContext } from "../../App.jsx";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

export const NavigationItem = observer(({children, className, newPath}) => {
    const navigate = useNavigate();
    const thisItem = useRef()
    const activePage = useContext(activePageContext)

    const handleClick = e => {
        if (toJS(activePage.activePage).toLowerCase() === thisItem.current.id.toLowerCase()) return 0;
        // Если нажата эта же кнопка, то выходим

        const lastPageItem = document.getElementById(toJS(activePage.activePage).toLowerCase())
        // Получаем предыдущию кноку
        // console.log(lastPageItem)

        lastPageItem.classList.remove('sidebar__profile_navigation_item-active')
        // Убираем активный класс для текущей кнопки

        activePage.activePage = children.toLowerCase()
        // Изменяем текущию страницу в глобал сторе

        navigate(newPath)
        // Переводим на следуищую страницу
    }

    useEffect(() => {
        if (toJS(activePage.activePage).toLowerCase() === thisItem.current.id.toLowerCase()){
            thisItem.current.className += ' sidebar__profile_navigation_item-active'
        }
    })
    
    return (<div
        className={`${className}`}
        id={`${children.toLowerCase()}`}
        onClick={handleClick}
        ref={thisItem}
    >
        {children}
    </div>)
})