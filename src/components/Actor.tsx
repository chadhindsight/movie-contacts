
interface ActorInterface {
    name: string;
    pictureUrl: string;
    popularity: number;
    id: string;
}

const Actor: React.FC<ActorInterface> = ({ name, pictureUrl, popularity, id }) => {
    return (
        <tr data-id={id}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {name}
                <img src={pictureUrl} alt={name} />
            </th>
            <td className="px-6 py-4">
                {popularity}
            </td>
            <td className="px-6 py-4">
                <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Actor;