import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GiCommercialAirplane, GiSuitcase } from "react-icons/gi";
import { FaRoute, FaWallet, FaConciergeBell, FaSuitcaseRolling } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import { SiYourtraveldottv } from "react-icons/si";


const Home: NextPage = () => {
  return (
    <div>
      <div className="fixed bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Nova</span>
            <SiYourtraveldottv size='3em'/>
              </a>
              <h1 className={styles.title}>
                <a>Nova</a>
                {''} travel app
              </h1>
            </div>
              <div>
                <FaSuitcaseRolling className='inline-block' size='3em'/>
                <p className='text-xl bold inline-block'> My Trip</p>
              </div>
            </div>
        </div>
      </div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Choose what you need to plan or book for you trip...{' '}
          
        </p>

        <div className='container mx-auto px-4 text-center'>
          <div className='max-w-md m-auto'>
        <div className='flex flex-row justify-between'>
            <section className='w-26 '>
            <h2 className='font-mono bold text-sm md:text-lg'>
              Itinerary
            </h2>
            <div className='bg-slate-300 p-4 rounded-xl'>
              <FaRoute size='4em' />
            </div>

          </section>
            <section className='w-26 text-center'>
            <h2 className='font-mono bold text-sm md:text-lg'>
              Packing List
            </h2>
            <div className='m-auto bg-slate-300 p-4 rounded-xl w-fit'>
              <GiSuitcase size='4em' />
            </div>
  
          </section >
            <section className='w-26 text-center'>
            <h2 className='font-mono bold text-sm md:text-lg'>
              To Do List
            </h2>
            <div className='m-auto bg-slate-300 p-4 rounded-xl w-fit'>
              <GoTasklist size='4em' />
            </div>
          </section>
          </div>
          <div className='flex flex-row justify-between mt-4'>
            <section className='w-26'> 
              <h2 className='font-mono bold text-sm md:text-lg'>
                Expenses
              </h2>
              <div className='m-auto bg-slate-300 p-4 rounded-xl w-fit'>
              <FaWallet size='4em' />
              </div>
         
          </section>
          <section className='w-26'>
          <h2 className='font-mono bold text-sm md:text-lg'>
              Booking
            </h2>
              <div className='bg-slate-300 p-4 rounded-xl'>
               <FaConciergeBell size='4em' />
              </div>
           
          </section>
            <section className='w-26'>
            <h2 className='font-mono bold text-sm md:text-lg'>
              Transit
            </h2>
            <div className='m-auto bg-slate-300 p-4 rounded-xl w-fit'>
              <GiCommercialAirplane size='4em' />
              </div>
          
            </section>
            </div>
            </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://ca.linkedin.com/in/gowdilya"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created By Gowdilya
        </a>
      </footer>
    </div>
  )
}

export default Home
