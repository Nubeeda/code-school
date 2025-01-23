import Nav from "./Navbar";
import Footer from "./Footer"
const Holidays=()=>{
    const holiday=[

        {
            title: "Winter vacation",
            duration: "15/1/2025",
            Date: "27/12/2024",
        },
        {
            title: "Winter vacation",
            duration: "15/1/2025",
            Date: "27/12/2024",
        },
        {
            title: "Winter vacation",
            duration: "15/1/2025",
            Date: "27/12/2024",
        },
        {
            title: "Winter vacation",
            duration: "15/1/2025",
            Date: "27/12/2024",
        },
        {
            title: "Winter vacation",
            duration: "15/1/2025",
            Date: "27/12/2024",
        },
    ]
       
    
    return(
        <div>
            <Nav/>
            <div className="w-3/5 my-0 mx-auto py-16 px-0 ">
            <h1 className="text-center text-lg font-semibold mb-2">Your Holiday's</h1>
                <table className="w-full">
                    <thead>
                    <tr className="bg-[#ddd]">
                        <th className=" p-2">S/no</th>
                        <th>Title</th>
                        <th>Duration</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            holiday.map((item,index)=>(
                                <tr className="text-center" key={index}>
                                    <td className="p-3 border-[1px solid #ccc] border-b">
                                        {index+1}
                                    </td>
                                    <td className="p-3 border-[1px solid #ccc] border-b">
                                        {item.title}
                                    </td>
                                    <td className="p-3 border-[1px solid #ccc] border-b">
                                        {item.duration}
                                    </td>
                                    <td className="p-3 border-[1px solid #ccc] border-b">
                                        {item.Date }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    
                </table>
            </div>
            
            <Footer/>
        </div>
    )
}
export default Holidays