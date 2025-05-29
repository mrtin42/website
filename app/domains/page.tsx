import Navbar from '@/components/main/nav'
import Domains from '@/components/ui/domains'

export default function DomainsPage() {
  return (
    <>
      <Navbar active='domains' />
      <main className="flex flex-col md:flex-row row-start-2 justify-center items-center w-full max-w-full h-full gap-3">
        <div className="flex flex-col gap-2 h-full items-center justify-center md:items-start md:mr-2">
          <div className="relative">
            <h1 className="glitch-index text-[3rem] md:text-[5rem] uppercase" aria-hidden>
              <span>Domains</span>
              Domains
              <span>Domains</span>
            </h1>
            <p className="sr-only">
              domains
            </p>
          </div>
          <p className="text-center md:text-left text-sm md:text-xl">
            domains i own and manage, and for why. i might be the consumerism final boss 😭
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:h-full md:ml-2">
          <Domains />
        </div>
      </main>
    </>
  )
}