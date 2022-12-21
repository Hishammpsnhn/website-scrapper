import React, { useContext } from 'react';
import { UrlContext } from '../store/context';
import Insight from './Insight';

function Table() {
    const { insights } = useContext(UrlContext);

    return (

        <div className=" w-[90%] m-auto overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-black dark:text-gray-900">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 dark:text-cyan-600">
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
                        <Insight key={i} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table