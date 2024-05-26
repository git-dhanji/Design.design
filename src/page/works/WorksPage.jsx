import { PageRef, ProjectShowCase } from "../../components";


export default function WorksPage() {
  return (
    <div className="h-auto w-full">
    <div>
      <PageRef
      name="presentation"
      />
      <ProjectShowCase/>
    </div>
  </div>
  )
}
