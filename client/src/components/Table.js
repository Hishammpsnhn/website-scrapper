import React, { useContext } from 'react'
import { UrlContext } from '../store/context'
import Insight from './Insight'
function Table() {
    const { insights } = useContext(UrlContext)
    return (

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Domain Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            WordCount
                        </th>
                        <th scope="col" className="py-3 px-6">
                            favorite
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Media-Links
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {insights.map((item, i) => (
                        <Insight item={item} />
                    ))}


                </tbody>
            </table>
        </div>

    )
}

export default Table