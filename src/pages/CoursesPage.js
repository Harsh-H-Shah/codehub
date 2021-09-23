import React,{useEffect} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import Laptoplogo from '../static/CoverSvg/Laptop.svg'
import CoursesCard from '../components/CoursesCard'

const CoursesPage = () => {
    const crops = {title:'html',logo:'../static/cardslogo/HTMLLogo.svg', description:'Html is good', curator:'gayatri'}
    const info = null;
    useEffect((info) => {
        fetch('../db.json')
        .then(res=>{console.log(res);})
    }, [])
    console.log(info);
    return (
        <div className='flex flex-col justify-center bg-primary'>
            <Navbar/>
            {/* <div className='flex flex-row place-content-between'>
                <div className=' flex place-items-center w-max text-secondary-darkgray font-serif text-5xl justify-start ml-10 pb-32 z-0'>Never put a full stop to learning and growth</div>
                <img src={Laptoplogo} alt='laptoplogo'/>
            </div> */}
            <div className='m-10 flex flex-col place-self-start'>
                <div className='text-secondary-darkgray font-serif text-4xl pb-14 py-7'>Frontend Development</div>
                <CoursesCard title={crops.title} logo={crops.logo} description={crops.description} curator={crops.curator} />
                <div className='text-secondary-darkgray font-serif text-4xl py-14'>Backend Development</div>
                <CoursesCard title={crops.title} logo={crops.logo} description={crops.description} curator={crops.curator} />
                <div className='text-secondary-darkgray font-serif text-4xl py-14'>Database Management</div>
                <CoursesCard title={crops.title} logo={crops.logo} description={crops.description} curator={crops.curator} />
                <div className='text-secondary-darkgray font-serif text-4xl py-14'>Git & Github</div>
                <CoursesCard title={crops.title} logo={crops.logo} description={crops.description} curator={crops.curator} />
            </div>
            <Footer/>
        </div>
    )
}

export default CoursesPage;
