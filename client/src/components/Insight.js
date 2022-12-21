import React, { useContext } from 'react';
import { deleteInsights, updateInsight } from '../Action/getInsights';
import { UrlContext } from '../store/context';
import { toast } from "react-toastify";

function Insight({ item }) {
    const { setInsights, insights } = useContext(UrlContext);

    const handleDelete = (id) => {
        deleteInsights(id);
        setInsights(insights.filter((post) => post._id !== id));
        toast.info('Removed Successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const handleFavorite = (id) => {
        const ids = toast.loading("Please wait...");
        if (item.favorite === true) {
            updateInsight(id, { favorite: false }).then((res) => {
                setInsights(insights.map((post) => (post._id === res._id ? res : post)));
                toast.update(ids, { render: "Remove-From-Fav", type: "success", isLoading: false, autoClose: 1000, closeOnClick: true, });
            })
        } else {
            updateInsight(id, { favorite: true }).then((res) => {
                setInsights(insights.map((post) => (post._id === res._id ? res : post)));
                toast.update(ids, { render: "Add-To-Fav", type: "success", isLoading: false, autoClose: 1000, closeOnClick: true });
            })
        }
    }
    return (
        <tr className="bg-white dark:bg-slate-300">
            <th scope="row" className="py-4 px-6 font-mdium text-black whitespace-nowrap dark:text-black align-top">
                <a href={item.domain}>
                    {item.domain}
                </a>
            </th>
            <td className="py-4 px-6 align-top">
                {item.words}
            </td>
            <td className="py-4 px-6 align-top">
                {item.favorite ? (<>True <span className='text-lg text-red-600'>♥️</span> </>) : "False"}
            </td>
            <td className="py-4 px-6 align-top">
                {item?.images?.map((item, i) => (
                    <ul key={i}>
                        <li>
                            <a href={item} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                {item.length > 30 && (item = item.substring(0, 30))}...
                            </a>
                        </li>
                    </ul>
                ))}
            </td>
            <td className="py-4 px-6 align-top">
                <button className="flex-shrink-0 bg-teal-500 border-transparent font-semibold border-4 text-red-600 hover:text-red-900 text-sm py-1 m-1 px-2 rounded"
                    onClick={() => handleDelete(item._id)}
                >
                    Delete
                </button>
                <button className=" flex-shrink-0  bg-teal-500 font-semibold border-transparent border-4 text-white hover:text-teal-800 text-sm m-1 py-1 px-2 rounded"
                    onClick={() => handleFavorite(item._id)}
                >
                    {item.favorite ? "Remove-Fav" : (<>Add-To-Fav <span className='text-md text-red-600'>♥️</span> </>)}
                </button>

            </td>

        </tr>
    )
}

export default Insight