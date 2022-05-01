import React from 'react'
import InfoCarts from './InfoCarts'
import TrendingTechLineChart from '../charts/TrendingTechLineChart'
import IncomeAndExpePieChart from '../charts/IncomeAndExpePieChart'


let infoCartData = [
    {
        id: 1,
        logo: "fa-solid fa-users text-green-500",
        name: "Students",
        number: "1500+",
        show: "block",
        hide: "hidden"
        //<i class="fa-solid fa-people-group"></i>
    },
    {
        id: 2,
        logo: "fa-solid fa-chalkboard-user text-blue-500",
        name: "Teachers",
        number: "500+",
        show: "block",
        hide: "hidden"
    },
    {
        id: 3,
        logo: "fa-solid fa-book-open text-orange-500",
        name: "Courses",
        number: "600+",
        show: "block",
        hide: "hidden"
    },
    {
        id: 4,
        logo: "fa-solid fa-people-group text-cyan-500",
        name: "Team Members",
        number: "100+",
        show: "block",
        hide: "hidden"
    },
]

const DashboardHomePage = () => {
    return (
        <>

            <section className='h-screen ' >
                <div className='grid grid-cols-12 gap-5 container m-auto  ' >
                    {infoCartData.map(data => <InfoCarts key={data.id} data={data} />)}

                </div>

                <div className='bg-red-400  grid grid-cols-12 mt-5 p-5 space-y-5 '>
                    <div className='col-span-12 sm:col-span-6'>
                        <TrendingTechLineChart />

                    </div>
                    <div className='col-span-12 sm:col-span-6'>
                        <IncomeAndExpePieChart />
                    </div>








                </div>
            </section>
        </>
    )
}

export default DashboardHomePage