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
        // Select random contact and put it to the start of contact list!
        const randoNum = Math.floor(Math.random() * remainingActors.length);
        const randomActor = remainingActors[randoNum];
        console.log('checking', randomActor);
        setVisibleActors(prevActors => [randomActor, ...prevActors]);
        // Update list of remaining contacts
        setRemainingActors([...remainingActors].splice(randoNum, randoNum + 1))
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