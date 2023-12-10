import React, { useEffect, useState } from 'react';
import Actor, { ActorInterface } from './Actor';

type ActorsList = ActorInterface[];

const Actors: React.FC<{ actors: ActorsList }> = ({ actors }) => {
    const [visibleActors, setVisibleActors] = useState<ActorsList>([]);

    useEffect(() => {
        setVisibleActors(actors.slice(0, 5))
    }, []);

    return (
        <table>
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
            <tbody>
                {
                    /* Only render the first 5 actors from the list for better UI experiences */
                    visibleActors.map((actor) => {
                        return <Actor {...actor} />
                    })
                }

            </tbody>
        </table>
    );
};

export default Actors;