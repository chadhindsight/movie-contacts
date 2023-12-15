import React, { useEffect, useState } from 'react';
import Actor, { ActorInterface } from './Actor';

type ActorsList = ActorInterface[];

const Actors: React.FC<{ actors: ActorsList }> = ({ actors }) => {
    const [visibleActors, setVisibleActors] = useState<ActorsList>([]);
    const [remainingActors, setRemainingActors] = useState(actors)

    useEffect(() => {
        setVisibleActors(actors.slice(0, 5))
    }, [actors]);

    const deleteActor = (id: string) => {
        // Update visibleActors based on the current state
        setVisibleActors(prevActors => prevActors.filter(actor => actor.id !== id));
    }

    const getRandomActorFromList = () => {
        if (remainingActors.length === 0) {
            // If all actors are added, reset the remaining actors to the original list
            setRemainingActors(actors);
        } else {
            // Select random actor and put it at the start of the visibleActors list
            const randomIndex = Math.floor(Math.random() * remainingActors.length);
            const randomActor = remainingActors[randomIndex];
            // if visibleActors already has the randomActor in it, do not add random actor
            if (visibleActors.includes(randomActor)) {
                return
            }
            // Update list of remaining actors and visible actors
            setRemainingActors(prevRemainingActors => prevRemainingActors.filter((actor, index) => index !== randomIndex));
            setVisibleActors(prevVisibleActors => [randomActor, ...prevVisibleActors]);
        }
    };

    const sortByName = () => {
        const updatedList = [...visibleActors].sort((actor1, actor2) => actor1.name.localeCompare(actor2.name));
        setVisibleActors(updatedList)

    }

    const sortByRenown = () => {
        const sortedList = [...visibleActors].sort((actor1, actor2) => actor1.popularity - actor2.popularity);
    }

    return (
        <>
            {visibleActors.length ? (

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
                            <th scope="col" className="px-6 py-3">
                                <button onClick={() => getRandomActorFromList()}>Add Random Actor</button>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <button onClick={() => sortByName()}>Sort By Name</button>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <button>Sort By Renown</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            /* Only render the first 5 actors from the list for better UI experiences */
                            visibleActors.map((actor) => {
                                return <Actor key={actor.id} {...actor} deleteActor={() => deleteActor(actor.id)} />
                            })
                        }

                    </tbody>
                </table>
            ) : (
                <p>Sorry, No Actors to display!</p>
            )
            }
        </>

    );
};

export default Actors;