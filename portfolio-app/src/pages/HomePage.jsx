// import logo from './logo.svg';
import linus from '../assets/Linus.png';
import LinkedInLogo from '../assets/linkedin-logo.png';
import GithubLogo from '../assets/GithubLogo.png';


import PulbereLogo from '../assets/PulbereLogo.png';
import EngineImage from '../assets/C++Image.png';

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




export function DES315()
{
 //open prject page
  return(

  <>
  
  </>
);
}

export function DownloadCV()
{
  
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
        <section className='ProjectGifSection'>
          {/* <Image className= 'ProjectGifContainer' resource={homer} altName='homer'/> */}
        </section>
        <section className='ProfileSection'>
          <Image className = 'ProfileContainer' resource = {linus} altName = 'Linus'/>      
        </section>
        {/* //render about me page if about me button clicked  */}
        <section className='AboutMeButtonContainer'>
            <Button className =  "button-81" name = "About Me" func = {() => SetAboutMeOpen(!aboutMeOpen)}/> 
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

