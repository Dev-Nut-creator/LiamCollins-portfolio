import LinkedInLogo from '../assets/linkedin-logo.png';
import GithubLogo from '../assets/GithubLogo.png';


import PulbereLogo from '../assets/PulbereLogo.png';

import pulbere1 from '../assets/pulbere-1.png';
import pulbere2 from '../assets/pulbere-2.png';
import pulbere3 from '../assets/pulbere-3.png';
import pulbere4 from '../assets/pulbere-4.png';

import pulbereVideo from '../assets/pulbere-video.mp4';

import placeholder from '../assets/placeholder.png';

import EngineImage from '../assets/NuttyEngine-1.png';

import GreedyCells from '../assets/GreedyCells.png';
import GreedyCells2 from '../assets/GreedyCells-2.png';
import GreedyCells3 from '../assets/GreedyCells-3.png';

import './HomePage.css';

import { useState, useEffect  } from 'react';


export function Button({name, func, className})
{
  return <button className={className} onClick= {func}>{name}</button>
}

export function ImageButton({name,func,className,imageClassName,image,alt , subText})
{
  return( 
    <div>
    <button className={className} onClick= {func}>
      <img className={imageClassName} src = {image} alt= {alt} ></img>
      <p className='ProjectButtonText'>{name}</p>
      <p className = 'ProjectButtonSubTextContainer'>{subText}</p>
    </button>
    </div>
  );
}



export function Image({className,resource,altName})
{
  return <img className={className} src = {resource} alt = {altName}/>;
}  



export function AboutMe()
{
  //write about me page here
  return(
    <section className='AboutMeSection'>
        {/* create the container for the about me section*/}
        <p className = 'fadeInText'>
          Passionate about Engine Systems/tools programming and looking for a role that can give me an oportunity to challenge myself and explore the intricate and complex functionality of game engines. 
          My work aims to focus on developement areas tied to gameplay or physics systems but can expand to rendering with 
          emphasis on the lower level implementations that can be made to improve or add features. 
          I want to be able to create elegant and accessible solutions for other developers to ease developement proccesses and expand my own understanding of existing frameworks to continue to develop on my own.
        </p>
        
    </section>
  );

}




export function DES315({stateProp})
{
 //open prject page
  return(

      <section className = 'SquareContainer'>
        <h1 className='SquareContainerHeader'>PULBERE</h1>
      
          <section className = 'CloseButtonContainer'>
            <Button className='button-81' name = ' close' func = {() =>stateProp(false)}/>
          </section>
            <section className='TextSection'>
                <h1 className='DescriptionHeader'> Description</h1>
                <p className='ProjectDescription'>
                    Pulbere is a fast-paced action game where you must fight through the evil lords
                    minions while you fight the loss of your own blood. Use your telikinetic powers to thwart those in your way.

                    Produced in Unreal Engine 5 using both C++ and Blueprint within an 8 person team;
                </p>
                <h2 className='ProjectRolesHeader'> Role</h2>
                <p className='ProjectRoles'>
                  - Gameplay and Systems programmer
                </p>
                <h2 className = 'SpecificTasksInRoleHeader'>Specific Tasks</h2>
                <ul className = 'SpecificTasksInRole'>
                  <li>Contributed to developement of the Enemy AI system using Unreal Engine 5's AI-State Trees.</li> 
                  <li>Produced early implementation of the projectile system for managing objects that can be effected by telikenesis.</li>
                  <li>Added implementations for managing game state and communications between different systems</li>
                  <li>Performance profiling using Unreal Engines built in profiling tools</li>
                  <li>Implemented the player actor class and associated mechanics such as biting , dashing, grappling and blood drain.</li>
                  <li>Implemented provided art assets for animations using Unreal Engines IK-rigs and animation blueprinting tools.</li>


                </ul>
            </section>
            <section className='ImageSection'>
              <section className='ImageSectionGrid'>
                  <Image className = 'ImageSectionImage' resource={pulbere1}></Image>
                  <Image className = 'ImageSectionImage' resource={pulbere2}></Image>
                  <Image className = 'ImageSectionImage' resource={pulbere3}></Image>
                  <Image className = 'ImageSectionImage' resource={pulbere4}></Image>
              </section>
              <video className = 'ProjectVideo' controls>
                <source src = {pulbereVideo} type = 'video/mp4'/>
              </video>
            </section>    
    </section>

);
}

export function NuttyEngine({stateProp})
{
  return(
      <section className = 'SquareContainer'>
        <h1 className='SquareContainerHeader'>NUTTY ENGINE</h1>
      
          <section className = 'CloseButtonContainer'>
            <Button className='button-81' name = ' close' func = {() =>stateProp(false)}/>
          </section>
            <section className='TextSection'>
                <h1 className='DescriptionHeader'> Description</h1>
                <p className='ProjectDescription'>
                   
                </p>
                <h2 className='ProjectRolesHeader'> Role</h2>
                <p className='ProjectRoles'>
            
                </p>
                <h2 className = 'SpecificTasksInRoleHeader'>Specific Tasks</h2>
                <ul className = 'SpecificTasksInRole'>
       

                </ul>
            </section>
            <section className='ImageSection'>
              <section className='ImageSectionGrid'>
                  <Image className = 'ImageSectionImage' resource={placeholder}></Image>
                  <Image className = 'ImageSectionImage' resource={placeholder}></Image>
                  <Image className = 'ImageSectionImage' resource={placeholder}></Image>
                  <Image className = 'ImageSectionImage' resource={placeholder}></Image>
              </section>
              {/* <video className = 'ProjectVideo' controls>
                <source src = {pulbereVideo} type = 'video/mp4'/>
              </video> */}
            </section>    
    </section>


  );
}

export function DALEKSURVIVOR({stateProp})
{

  return(
    <section className = 'SquareContainer'>
        <h1 className='SquareContainerHeader'>DALEK SURVIVOR</h1>
      
          <section className = 'CloseButtonContainer'>
            <Button className='button-81' name = ' close' func = {() =>stateProp(false)}/>
          </section>
            <section className='TextSection'>
                <h1 className='DescriptionHeader'> Description</h1>
                <p className='ProjectDescription'>
                   
                </p>
                <h2 className='ProjectRolesHeader'> Role</h2>
                <p className='ProjectRoles'>
            
                </p>
                <h2 className = 'SpecificTasksInRoleHeader'>Specific Tasks</h2>
                <ul className = 'SpecificTasksInRole'>
       

                </ul>
            </section>
            <section className='ImageSection'>
              <section className='ImageSectionGrid'>
                  <Image className = 'ImageSectionImage' resource={placeholder}></Image>
                  <Image className = 'ImageSectionImage' resource={placeholder}></Image>
                  <Image className = 'ImageSectionImage' resource={placeholder}></Image>
                  <Image className = 'ImageSectionImage' resource={placeholder}></Image>
              </section>
              {/* <video className = 'ProjectVideo' controls>
                <source src = {pulbereVideo} type = 'video/mp4'/>
              </video> */}
            </section>    
    </section>

  );
}

export function GREEDYCELLS({stateProp})
{

  return(
            <section className = 'SquareContainer'>
        <h1 className='SquareContainerHeader'>GREEDY CELLS</h1>
      
          <section className = 'CloseButtonContainer'>
            <Button className='button-81' name = ' close' func = {() =>stateProp(false)}/>
          </section>
            <section className='TextSection'>
                <h1 className='DescriptionHeader'> Description</h1>
                <p className='ProjectDescription'>
                   
                </p>
                <h2 className='ProjectRolesHeader'> Role</h2>
                <p className='ProjectRoles'>
            
                </p>
                <h2 className = 'SpecificTasksInRoleHeader'>Specific Tasks</h2>
                <ul className = 'SpecificTasksInRole'>
       

                </ul>
            </section>
            <section className='ImageSection'>
              <section className='ImageSectionGrid'>
                  <Image className = 'ImageSectionImage' resource={GreedyCells2}></Image>
                  <Image className = 'ImageSectionImage' resource={GreedyCells3}></Image>

              </section>
              {/* <video className = 'ProjectVideo' controls>
                <source src = {pulbereVideo} type = 'video/mp4'/>
              </video> */}
            </section>    
    </section>

  );
}




export function DownloadCV()
{
  window.open("https://drive.google.com/file/d/1-LLI-DDcbcMv1lDOPG4sb-eN7KudtW22/view?usp=drive_link","_blank","noopener,noreferrer");
}

export function AllProjects()
{
  //open all projects page
  return(

    <>

    </>
  );    
}

export function OpenLinkedInPage()
{
  //open linked in page
  window.open("https://www.linkedin.com/in/liam-collins-5192552b8/","_blank","noopener,noreferrer");
  
}

export function OpenGithubPage()
{
  //open github page
  
  window.open("https://github.com/Dev-Nut-creator","_blank","noopener,noreferrer");
}



export default function HomePage() 
{
  // //make various states for each element that can be conditionally rendered

  const [aboutMeOpen, SetAboutMeOpen] = useState(false);
  const [EngineProjectOpen, SetEngineProjectOpen] = useState(false);
  const [DES315ProjectOpen, SetDES315ProjectOpen] = useState(false);
  const [GreedyCellsOpen, SetGreedyCellsProjectOpen] = useState(false);
  const [DalekSurvivorOpen, SetDalekSurvivorProjectOpen] = useState(false);


  // const navigate = useNavigate();


  return(
        <div>
        <section className = 'SiteButtonsContainer'>
           <ImageButton className='button-81' name = '' func = {() =>OpenLinkedInPage()} image = {LinkedInLogo} imageClassName='SocialsImageButton' alt = 'LinkedIn'/>
            <ImageButton className='button-81' name = '' func = {() =>OpenGithubPage()} image = {GithubLogo} imageClassName='SocialsImageButton' alt = 'Github'/>
        </section>


          {EngineProjectOpen && <NuttyEngine stateProp={ SetEngineProjectOpen}/>}
          {DES315ProjectOpen && <DES315 stateProp = {SetDES315ProjectOpen}/>}
          {GreedyCellsOpen && <GREEDYCELLS stateProp={SetGreedyCellsProjectOpen}/>}
          {DalekSurvivorOpen && <DALEKSURVIVOR stateProp={SetDalekSurvivorProjectOpen}/>}

        <section className='ProjectGifSection'>
          {/* <Image className= 'ProjectGifContainer' resource={background} altName='background'/> */}
        </section>
        <section className='ProfileSection'>
          <Image className = 'ProfileContainer' resource = {placeholder} altName = 'me'/>      
        </section>
        {/* //render about me page if about me button clicked  */}
        <section className='AboutMeButtonContainer'>
            <Button className =  "button-81" name = "PROFILE" func = {() => SetAboutMeOpen(!aboutMeOpen)}/> 
        </section>
     
        {aboutMeOpen && <AboutMe/>}
        <hr className = 'solid'></hr>
      
        <section className='NavBarSection'>
          <details>
              <summary></summary>
            <nav class="menu">
              <a href = "#link" onClick={()=> DownloadCV()}>DownloadCV</a>
              <a href="#link" onClick={()=> AllProjects()}>AllProjects</a>

            </nav>
          </details>
        </section>
        <section className='NameDisplaySection'>
          <h1 className = 'NameDisplay'>LIAM COLLINS</h1>
        </section>


        <section className='ProjectSection'>
          {/* create buttons that hold a gif to each project and each of their own sections for showing text*/}
          <ImageButton className='button-81' name = 'NUTTY-ENGINE' subText= 'High-Performance C++ Game Engine' func = {() =>SetEngineProjectOpen(!EngineProjectOpen)} image={EngineImage} imageClassName='ProjectButtonImage' alt = 'NuttyEngine'/>
          <ImageButton className='button-81' name = 'PULBERE' subText= 'Fast-Paced Action Game Built in UE5' func = {() =>SetDES315ProjectOpen(!DES315ProjectOpen)} image={PulbereLogo} imageClassName='ProjectButtonImage' alt = 'DES315' />
          <ImageButton className='button-81' name = 'GREEDY CELLS' subText= '2D Tower-Defense Game Built in SFML C++' func = {() =>SetGreedyCellsProjectOpen(!GreedyCellsOpen)} image={GreedyCells} imageClassName='ProjectButtonImage' alt = 'GreedyCells' />
          <ImageButton className='button-81' name = 'DALEK SURVIVOR' subText= '3D Wave Based Survival Game Built for PS5'func = {() =>SetDalekSurvivorProjectOpen(!DalekSurvivorOpen)} image={placeholder} imageClassName='ProjectButtonImage' alt = 'DalekSurvivor' />
        </section>
        
  
    </div>
  );

  
}

