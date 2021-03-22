import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader.jsx'
import { ReactComponent as Logo } from './assets/img/logo.svg'
import enjoyable from './assets/img/homepage/enjoyable-place-desktop.jpg'
import locally from './assets/img/homepage/locally-sourced-desktop.jpg'
import famil from './assets/img/homepage/family-gathering-desktop.jpg'
import { AppFooter } from './cmps/AppFooter.jsx'
import './assets/scss/main.scss';
import { EventiApp } from './pages/EventiApp.jsx';



export class App extends Component {
    render() {
        return (
            <section className="main-container app-container">
                <section className="hero flex column align-center" >
                    <Logo />
                    <h1>Exquisite dining since 1989</h1>

                    <p>  Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from
                    the comfort of our farmhouse.</p>

                    <button>Book a table</button>
                </section>
                <section className="adds flex full" >
                    <div className="flex">  <img className="loacl2" src={enjoyable} />

                        <div><h1>Enjoyable place for all the family</h1><p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange
                        a tour of the farm before your meal.
</p></div>
                    </div>







                    <div className="flex">  <img className="loacl" src={locally} />

                        <div><h1>The most locally sourced food
                            </h1><p>
                                All our ingredients come directly from our farm or local fishery. So you can be sure that you’re
eating the freshest, most sustainable food.</p></div>
                    </div>
                </section>

                <section className="flex cards align-center title"><div className="desc"><h1>A few highlights from our menu</h1>
                    <p>  We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
  Our menu is revamped every season.</p>
                </div>
                    <EventiApp />
                </section>



                <section className="flex slider">
                    <img src={famil} alt="" />
                    <h1> Family Gathering</h1>
                    <p> We love catering for entire families. So please bring everyone along for a special meal with your
  loved ones. We’ll provide a memorable experience for all.</p>
                </section>

                <section className="order flex align-center  justify-center full">
                    <h1>Redeay to make a reservation</h1>
                    <button>Book a table</button>


                </section>

                <section className="flex space-between">

                    <h1> <Logo />  </h1>

                    <ul className="flex column">
                        <li>Marthwaite, Sedbergh</li>
                        <li>  Cumbria</li>
                        <li> +00 44 123 4567</li>

                    </ul>
                    <ul className="flex column"><li>Open Times</li>
                        <li>   Mon - Fri: 09:00 AM - 10:00 PM</li>
                        <li> Sat - Sun: 09:00 AM - 11:30 PM</li></ul>
                </section>
            </section>

        )
    }


}

