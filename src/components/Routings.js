import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'


import Header from './Header.js'
import Footer from  './Footer.js'
import Home from './Home.js'
import About from './About.js'
import Services from './Services.js'


import RestapiData from './Restapi_data.js'
import User_view from './User_view.js'
import Registration from './Registration.js'
import User_edit from './User_edit.js'
import Login from './Login.js'
import Contact from './Contact.js'

import Pagenotfound from './Pagenotfound.js'

//dropdown components
import Smart_phones from './../components/inner/Smart_phones.js'
import Mobile_accessories from './../components/inner/Mobile_accessories.js'
import  Smart_watches from './../components/inner/Smart_watches.js'

import Laptops from './../components/inner/Laptops.js'
import Ipads from './../components/inner/Ipads.js'
import Laptop_accessories from './../components/inner/Laptop_accessories.js'
import Printers from './../components/inner/Printers.js'

import Oled_tv from './../components/inner/Oled_tv.js'
import Led_tv from './../components/inner/Led_tv.js'
import Smart_tv from './../components/inner/Smart_tv.js'
import Qled_tv from './../components/inner/Qled_tv.js'
import Home_theatre from './../components/inner/Home_theatre.js'

import Air_conditioner from './../components/inner/Air_conditioner.js'
import Air_coolers from './../components/inner/Air_coolers.js'
import Refrigerator from './../components/inner/Refrigerators.js'
import Washing_machines from './../components/inner/Washing_machines.js'
import Geysers from './../components/inner/Geysers.js'

import Gas_stoves from './../components/inner/Gas_stoves.js'
import Rice_cookers from './../components/inner/Rice_cookers.js'
import Induction_cooktop from './../components/inner/Induction_cooktop.js'
import Juicers from './../components/inner/Juicers.js'
import Mixers from './../components/inner/Mixers.js'
import Kettles from './../components/inner/kettles'

import Trimmer from './../components/inner/Trimmer.js'
import Hair_straightener from './../components/inner/Hair_straightener'
import Hair_dryer from './../components/inner/Hair_dryer'

import Add_to_cart from './Add to cart.js'


const Routings=()=>
{
    return(
        <>
            <BrowserRouter>


                {/* Header */}
                    <Header /> 
                {/* Header */} 


                <Switch>

                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />


                    {/* */}
                    <Route  path="/smartphones" component={Smart_phones} />
                    <Route  path="/mobile accessories" component={Mobile_accessories} />
                    <Route  path="/smart watches" component={Smart_watches} />

                    <Route  path="/laptops" component={Laptops} />
                    <Route  path="/ipads" component={Ipads} />
                    <Route  path="/laptop accessories" component={Laptop_accessories} />
                    <Route  path="/printers" component={Printers} />

                    <Route  path="/oled tv" component={Oled_tv} />
                    <Route  path="/led tv" component={Led_tv} />
                    <Route  path="/smart tv" component={Smart_tv} />
                    <Route  path="/qled tv" component={Qled_tv} />
                    <Route  path="/home theatre" component={Home_theatre} />

                    <Route path="/air conditioner" component={Air_conditioner} />
                    <Route  path="/air cooler" component={Air_coolers} />
                    <Route  path="/refrigerators" component={Refrigerator} />
                    <Route  path="/washing machine" component={Washing_machines} />
                    <Route  path="/geysers" component={Geysers} />

                    <Route  path="/gas stoves" component={Gas_stoves} />
                    <Route  path="/rice cookers" component={Rice_cookers} />
                    <Route  path="/induction cooktop" component={Induction_cooktop} />
                    <Route  path="/juicers" component={Juicers} />
                    <Route  path="/mixers" component={Mixers} />
                    <Route  path="/kettles" component={Kettles} />

                    <Route path="/trimmer" component={Trimmer} />
                    <Route  path="/hair dryer" component={Hair_dryer} />
                    <Route  path="/hair straightener" component={Hair_straightener} />
                    
                    
                    {/*  restapi data */}
                    <Route exact path="/user" component={RestapiData} />
                    {/* */}
                    <Route path="/user/view/:id" component={User_view} />
                    <Route path="/user/edit/:id" component={User_edit} />
                    
                    {/*  hooks 
                    <Route path="/hooks" component={Hooks} />
                    <Route path="/hooks_ex_1" component={Hooks_ex_1} /> */}

                    {/*  registration */}
                    <Route path="/registration" component={Registration} />
                    <Route path="/login" component={Login} />

                    <Route path="/contact" component={Contact} />
                    <Route path="/add_to_cart" component={Add_to_cart } />
                    <Route path="/services" component={Services} />

                    {/* redirect to default component 
                    <Redirect to={`/home`} />
                    */}

                    {/* default pagenotfound component */}
                    <Route component={Pagenotfound} />

                </Switch>


                {/* Footer */}
                    <Footer /> 
                {/* Footer */} 


            </BrowserRouter>

        </>
    )

}

export default Routings; 