import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { getInsight } from '../Action/getInsights';
import { UrlContext } from '../store/context';

function Input() {
    const { setInsights, insights } = useContext(UrlContext);

    const [url, setUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (url.length < 5) {
            toast.error('Incorrect Url', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        const id = toast.loading("Please wait...")
        getInsight({ domain: url, favorite: false }).then((res) => {
            setInsights([res, ...insights]);
            toast.update(id, { render: "Insights Added", type: "success", isLoading: false, autoClose: 3000, closeOnClick: true, });
            setUrl("");
        }).catch((err) => {
            toast.update(id, { render: "URL Not Found !", type: "error", isLoading: false, autoClose: 2000, closeOnClick: true, });
        })
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm m-auto my-10">
            <div className="flex items-center border-b border-teal-500 py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Enter Website URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)} />
                <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                    Get insights

                </button>
                <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                    type="button"
                    onClick={() => setUrl("")}>
                    Cancel
                </button>
            </div>
        </form>

    )
}

export default Input