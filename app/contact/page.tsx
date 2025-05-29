import Form from '@/components/main/form';
import Navbar from '@/components/main/nav';
import Flipcard from '@/components/main/flipcard';
import { cn } from '@/utils';
import { toast } from 'sonner';


export default function ContactPage() {


  return (
    <>
      <Navbar active='contact' />
      <main className="flex flex-col md:flex-row row-start-2 justify-center items-center w-full max-w-full h-full gap-3 overflow-y-auto">
        <div className="flex flex-col gap-2 h-full items-center justify-center md:items-start md:mr-2">
          <div className="relative">
            <h1 className="glitch-index text-[3rem] md:text-[5rem] uppercase" aria-hidden>
              <span>Contact</span>
              Contact
              <span>Contact</span>
            </h1>
            <p className="sr-only">
              contact
            </p>
          </div>
          <p className="text-center md:text-left text-sm md:text-xl">
            voice your thoughts. have a chat. lets be friends! or not, that's fine too.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-3">
          <div className="flex flex-row md:flex-col items-center justify-center w-full md:w-auto gap-3">
            <Flipcard
              front={
                <>
                  <h2 className="text-2xl md:text-3xl font-semibold">email</h2>
                  <p className="self-end text-sm md:text-base text-gray-300">
                    <span className="hidden md:inline">hover!</span>
                    <span className="md:hidden">tap!</span>
                  </p>
                </>
              }
            >
              <p className="text-sm text-black md:text-gray-300">
                i'm always open to emails; it's the easiest way to reach me. i check my emails regularly, so you can expect a response within a few days.
              </p>
              <a
                href="mailto:martin@mbfrias.co.uk"
                className="text-mdv text-blue-500 hover:underline hover:underline-offset-4 transition-colors"
                aria-label="Email Martin"
              >
                martin@mbfrias.co.uk
              </a>
            </Flipcard>
            <Flipcard
              front={
                <>
                  <h2 className="text-2xl md:text-3xl font-semibold">discord</h2>
                  <p className="self-end text-sm md:text-base text-gray-300">
                    <span className="hidden md:inline">hover!</span>
                    <span className="md:hidden">tap!</span>
                  </p>
                </>
              }>
                <p className="text-sm text-black md:text-gray-300">
                  fancy a chat? i'm pretty much always on discord, so feel free to drop me a message there. i might not respond immediately, but i'll get back to you as soon as i can.
                </p>
                <a
                  href="https://mbfr.me/discord"
                  className="text-mdv text-blue-500 hover:underline hover:underline-offset-4 transition-colors"
                  aria-label="Martin's Discord"
                >
                  2ube (they done terminated my main.)
                </a>
            </Flipcard>
          </div>
          <div className="flex flex-col items-start p-4 justify-between h-[33rem] w-full border border-white bg-[#00000093] backdrop-blur-xs rounded-lg">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">message form</h2>
              <p className="text-sm md:text-base text-gray-300 mb-4">
                for the lazy. pop me a message right here and ill get back to you as soon as i can.
              </p>
            </div>
            <Form />
          </div>
        </div>
      </main>
    </>
  );
}