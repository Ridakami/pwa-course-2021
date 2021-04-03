import {Link} from 'react-router-dom'
import './Settings.css'

function SettingPage() {

    return(

        <div className = "SettingPage">

            

            <div className = "Header">

              
                    
                 <div className = "Undo2" >
                    <Link to = "/HomePage">
                        <img src = "Union(1).png" alt = "" /> 
                    </Link> 
                </div>
                
                 <div className = "Header-text"/>
                    
            </div>
           
            <div className = "OptionSetting">

                <div className = "Profiles" />
                
                <div>
                    <Link to = "/profile">
                        <img src = "Profile.png" alt = ""/>
                    </Link>
                </div>

                <div className = "OptionSetting-Bar">

                    <div className  = "LogOut">
                        <Link to = "/">
                            <img src = "LogOut.png" alt = "" /> 
                        </Link>
                    </div>   
                </div>



            </div>  

        </div>

    )   
};

export default SettingPage;