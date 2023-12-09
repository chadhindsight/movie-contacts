import React from 'react';

const Actors = () => {
    // Loop through actors in this component
    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Actor
                </th>
                <th scope="col" className="px-6 py-3">
                    Popularity
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
    );
};

export default Actors;