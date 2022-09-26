import {Element} from 'react-scroll'
import Image from "next/image"
import tictactoe from "../public/tictactoe.png"
import p1 from "../public/p1.png"
import p2 from "../public/p2.png"
import p3 from "../public/p3.png"
import p4 from "../public/p4.png"
import ProjectItem from '../components/ProjectItem'

export default function work(){
    return(
        <Element id="work" name="work">
            <div>
            <div className="w-full md:pt-32 pt-28 h-auto flex flex-col justify-center items-center">
                <p className="text-sm uppercase text-gray-400">
                    Portfolio
                </p>
                <h1 className="text-indigo-900 mb-20 text-6xl font-bold text-center">
                    All Creative Works
                </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <ProjectItem 
                        title='tictactoe' 
                        backgroundImg={tictactoe} 
                        skills='HTML & CSS & JS'
                        projectUrl='https://wonjune-tictactoe.netlify.app/' />
                    
                    <ProjectItem 
                        title='Mario Jump' 
                        backgroundImg={p1} 
                        skills='HTML & CSS & JS'
                        projectUrl='https://marzo20.github.io/Jump-Mario/' />
                    <ProjectItem 
                        title='Free to Game' 
                        backgroundImg={p2} 
                        skills='Node.js & Express & SQL'
                        projectUrl='https://freetogame.herokuapp.com/' />

                    <ProjectItem 
                        title='DelishaGram' 
                        backgroundImg={p3} 
                        skills='MongoDB & Express & React & Node'
                        projectUrl='https://delishagram.netlify.app/feed' />
                    
                    <ProjectItem 
                        title='Niche Market' 
                        backgroundImg={p4} 
                        skills='Python'
                        projectUrl='https://nichemarket.herokuapp.com/' />

                </div>
            </div>
            </div>
        </Element>
    )
}