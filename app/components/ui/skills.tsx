"use client"

import { BACKEND_TECH, FRONTEND_TECH, stacksProps } from "@/app/constants/skillstack"
import Marquee from "react-fast-marquee"

const SkillsMarquee = ()=> {
  return(
    <section aria-label="tech-stacks" className="my-4">
      <h2 className="text-2xl font-semibold my-6">Tech Stack I've Used</h2>
      <div className="w-full space-y-6">
        <Marquee autoFill pauseOnHover speed={20}>
          <SkillsList stacks={FRONTEND_TECH}/>
        </Marquee>
        <Marquee autoFill pauseOnHover direction="right" speed={20}>
          <SkillsList stacks={BACKEND_TECH}/>
        </Marquee>
      </div>
    </section>
  )
}

export default SkillsMarquee;


const SkillsList = ({stacks}: {stacks: stacksProps})=> {
  return(
    <ul className="flex items-center " role="list">
      {Object.keys(stacks).map((stack, index)=> {
        const Icon = stacks[stack].Icon;
        const className  = stacks[stack].className;
        return(
          <li role="listitem" key={index} className="mr-2 flex w-max items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-2 text-[15px] text-neutral-50 shadow-sm">
            {<Icon className={className} aria-label={stack}/>}
            <span className="whitespace-nowrap">{stack}</span>
          </li>
        )
      })}
    </ul>
  )
}