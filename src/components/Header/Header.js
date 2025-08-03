import React from 'react';
import { Book, Moon, Search } from 'lucide-react';
import style from './Header.module.css';

export default function Header() {
    return (
        <header className={style.container}>
            <div className={`${style.wrapper} flex items-center`}>
                <div className={`flex items-center gap-3 flex-grow`}>
                    <Book size={24}/>
                    <h1 className={style.heading}>திருக்குறள்</h1>
                </div>
                <div className={`flex items-center gap-3`}>
                    <div className={`${style.searchBox} flex items-center gap-1`}>
                        <Search size={18}/>
                        <input 
                            type="text" 
                            className={style.searchInput} 
                            placeholder="Search..." 
                        />
                    </div>
                    <button className={`${style.themeBtn}`}>
                        <Moon size={18} />
                    </button>
                </div>
            </div>
        </header>
    )
}
