import React from 'react';
import Header from '../../components/Header/Header';
import style from './HomePage.module.css';

export default function HomePage() {
    return (
        <div className={`${style.container} cover overflowY`}>
            <Header/>
            <main className={style.main}>
                <div className={style.content}>
                    <h2>திருக்குறள்</h2>
                    <p><b>திருவள்ளுவரின் காலத்தால் அழியாத ஞானம்</b></p>
                    <p>2,000 ஆண்டுகளுக்கும் மேலாக மனிதகுலத்தை வழிநடத்தும் நல்லொழுக்கம், செல்வம் மற்றும் அன்பு பற்றிய ஆழமான போதனைகளை ஆராயுங்கள்.</p>
                </div>
                <div className={style.info}>
                    <h2>வாழ்க்கையின் மூன்று தூண்கள்</h2>
                    <p>1. அறம் (Virtue)</p>
                    <p>2. பொருள் (Wealth)</p>
                    <p>3. இன்பம் (Pleasure)</p>
                </div>
            </main>
            <footer className={style.footer}>
                <p>© 2025 Thirukkural. All rights reserved.</p>
            </footer>
        </div>
    )
}
