import logo from './assets/logo-2.png';
//import shade from './assets/shade.jpg';
import purple from './assets/purple.jpg'

const links = [
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Meet our Team', href: '#' },
  ]
  const stats = [
    { name: 'Art Workshops', value: '' },
    { name: 'Learners', value: '' },
    { name: 'Experience', value: '' },
    { name: 'Comission Works', value: '' },
  ]
  
  export default function Header() {
    return (
      <div className="relative isolate overflow-hidden  py-24 sm:py-32">
        
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex items-center justify-start">
              <div >
                <img src={logo} alt="YouArt Logo" className="h-[140px] w-30  pr-10" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">YouArt</h2>
            </div>
            <p className="mt-6 text-lg leading-8 text-black">
              Discover art at YouArt on the vibrant East Coast Road at Cholamandal Artists’ Village. We offer personalized art courses, workshops for all ages, commissioned artworks, and specialized programs for children with special needs. Led by Director Ranjini Jacob and Creative Director Jacob Jebaraj since 2007.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-black">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-black">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  