import projects from "../shared/projects"
import ProjectTile from "../shared/ProjectTile"

const Projects = () => {

  return (
    <div id="projects" className="px-40 flex flex-col gap-20 py-20">
      <div className="text-4xl my-name pt-10">Projects I worked on</div>
      <div className="flex lg:flex-row flex-col justify-between gap-10 proxima text-lg">
        {projects.map((project)=> <ProjectTile key={project.id} title={project.title} url={project.url} imageurl={project.imageurl}/>)}
      </div>
    </div>
  )
}

export default Projects