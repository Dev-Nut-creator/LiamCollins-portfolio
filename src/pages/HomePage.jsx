// import logo from './logo.svg';
import linus from '../assets/Linus.png';
import LinkedInLogo from '../assets/linkedin-logo.png';
import GithubLogo from '../assets/GithubLogo.png';

import CloseIcon from '../assets/closeicon.webp'

import PulbereLogo from '../assets/PulbereLogo.png';

import pulbere1 from '../assets/pulbere-1.png';
import pulbere2 from '../assets/pulbere-2.png';
import pulbere3 from '../assets/pulbere-3.png';
import pulbere4 from '../assets/pulbere-4.png';

import placeholder from '../assets/placeholder.png';

import EngineImage from '../assets/NuttyEngine-1.png';




import './HomePage.css'

import { useState, useEffect  } from 'react';


export function Button({name, func, className})
{
  return <button className={className} onClick= {func}>{name}</button>
}

export function ImageButton({name,func,className,imageClassName,image,alt})
{
  return( 
    <div>
    <button className={className} onClick= {func}>
      <img className={imageClassName} src = {image} alt= {alt} ></img>
      <p className='ProjectButtonText'>{name}</p>
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
          lorem ipsum dolor sit amet consectetur adipiscing elit est fuga cillum id nulla cumque ea enim illum culpa ipsum ut eiusmod vero in animi voluptas est laborum quibusdam cumque dolor mollitia et facere non at voluptas ut voluptatum cillum blanditiis omnis dolorum minus qui deleniti cupidatat velit et ducimus officia
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
                    Pulbere is a fast-paced action game. You must fight through the evil lords
                    minions while you also fight the loss of your own blood.Use your telikinetic powers to thwart those in your way.
                </p>
                <h2 className='ProjectRolesHeader'> Roles</h2>
                <p className='ProjectRoles'>
                  -Gameplay and Systems proggrammer
                </p>

            </section>    
            {/* <section className = 'ImageGalleryContainer'>
                <Image className='ProjectPageImageA' resource={pulbere1}/>
                <Image className='ProjectPageImageB' resource={pulbere2}/>
            </section> */}
          {/* </section> */}

    </section>

);
}

export function NuttyEngine({stateProp})
{
  return(
    <section className = 'SquareContainer'>
      <h1 className='SquareContainerHeader'>NuttyEngine</h1>
          <section className = 'CloseButtonContainer'>
            <Button className='button-81' name = ' close' func = {() =>stateProp(false)}/>
          </section>
            <section className='SquareContainerDescription'>
                <h1> BlahBlahBlah</h1>

            </section>    
            <section className = 'ImageGalleryContainer'>
                <Image className='ProjectPageImageA' resource={placeholder}/>
                <Image className='ProjectPageImageB' resource={placeholder}/>

            </section>

    </section>

  );
}

export function DownloadCV()
{
  window.open("https://drive.google.com/file/d/16OmOXDd83p9suC3v3VhLH3w_sTL7X6bN/view?usp=drive_link","_blank","noopener,noreferrer");
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

  // const navigate = useNavigate();


  return(
        <div>
          {EngineProjectOpen && <NuttyEngine stateProp={ SetEngineProjectOpen}/>}
          {DES315ProjectOpen && <DES315 stateProp = {SetDES315ProjectOpen}/>}

        <section className='ProjectGifSection'>
          {/* <Image className= 'ProjectGifContainer' resource={homer} altName='homer'/> */}
        </section>
        <section className='ProfileSection'>
          <Image className = 'ProfileContainer' resource = {linus} altName = 'Linus'/>      
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
          <ImageButton className='button-81' name = 'NUTTY-ENGINE' func = {() =>SetEngineProjectOpen(!EngineProjectOpen)} image={EngineImage} imageClassName='ProjectButtonImage' alt = 'NuttyEngine'/>
          
          <ImageButton className='button-81' name = 'PULBERE' func = {() =>SetDES315ProjectOpen(!DES315ProjectOpen)} image={PulbereLogo} imageClassName='ProjectButtonImage' alt = 'DES315' />
        </section>
        
        <section className = 'SiteButtonsContainer'>
           <ImageButton className='button-81' name = '' func = {() =>OpenLinkedInPage()} image = {LinkedInLogo} imageClassName='SocialsImageButton' alt = 'LinkedIn'/>
            <ImageButton className='button-81' name = '' func = {() =>OpenGithubPage()} image = {GithubLogo} imageClassName='SocialsImageButton' alt = 'Github'/>
        </section>
    </div>
  );

  
}

