export default function DataTable({data}){
    return(
        <table className="border">
            <tr className="rounded-lg divide-x">{Object.keys(data[0]).map((title)=>(<th className="px-2 w-16 bg-slate-300 border-2">{title}</th>))}</tr>
            {data.map((item)=>(<tr>{Object.values(item).map((items)=>(<td className="px-2 w-16 bg-slate-200 border-2 ">{items}</td>))}</tr>))}
        </table>
    )
}