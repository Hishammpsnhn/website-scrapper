import React, { useContext } from 'react'
import { deleteInsights, updateInsight } from '../Action/getInsights'
import { UrlContext } from '../store/context'
import { toast, ToastContainer } from "react-toastify";

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
                toast.update(ids, { render: "Remove-From-Fav", type: "success", isLoading: false ,autoClose: 1000,closeOnClick: true,});
            })
        } else {
            updateInsight(id, { favorite: true }).then((res) => {
                setInsights(insights.map((post) => (post._id === res._id ? res : post)));
                toast.update(ids, { render: "Add-To-Fav", type: "success", isLoading: false ,autoClose: 1000,closeOnClick: true});
            })
        }
    }
    return (
        <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.domain}
            </th>
            <td className="py-4 px-6">
                {item.words}
            </td>
            <td className="py-4 px-6">
                {item.favorite ? "True" : "False"}
            </td>
            <td className="py-4 px-6">
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
            <td className="py-4 px-6">
                <button className="flex-shrink-0 border-transparent border-4 text-red-500 hover:text-red-800 text-sm py-1 px-2 rounded"
                    onClick={() => handleDelete(item._id)}
                >
                    Remove
                </button>
                <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                    onClick={() => handleFavorite(item._id)}
                >
                    {item.favorite ? "Remove-Fav" : "Add-To-Fav"}
                </button>
            </td>
        
        </tr>
    )
}

export default Insight