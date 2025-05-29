import Navbar from '@/components/main/nav'
import Content from '@/components/ui/projects'

export default function ProjectsPage() {
	return (
		<>
			<Navbar active='projects' />
      <main className="flex flex-col md:flex-row row-start-2 justify-center items-center w-full max-w-full h-full gap-3">
				<div className="flex flex-col gap-2 h-full items-center justify-center md:items-start md:mr-2">
					<div className="relative">
						<h1 className="glitch-index text-[3rem] md:text-[5rem] uppercase" aria-hidden>
							<span>Projects</span>
							Projects
							<span>Projects</span>
						</h1>
						<p className="sr-only">
							projects
						</p>
					</div>
					<p className="text-center md:text-left text-sm md:text-xl">
						fullstack apps to odds and sods, here's some of the stuff i've made
					</p>
				</div>
				<div className="flex flex-col items-center justify-center w-full md:h-full md:ml-2">
						<Content />
				</div>
			</main>
		</>
	)
}