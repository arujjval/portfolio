
const ProjectTile = ({title, url, imageurl}) => {
  return (
    <div className="border border-dark-3 rounded-xl p-5 lg:opacity-70 opacity-100 hover:opacity-100  hover:scale-110 ease-in-out duration-300 basis-1/3">
      <a href={url}>
        <div className="flex flex-col gap-2">
          <div className="text-center">{title}</div>
          <div>
            <img src={imageurl} alt="image" className="rounded-xl opacity-90"/>
          </div>
        </div>
      </a>
    </div>
  )
}

export default ProjectTile