import { useQuery } from "react-query";
import axios from 'axios';

type Repository = {
    full_name: string;
    description: string;
}

function RepositoryList() {
    // Example useQuery with axios
    const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
        const response = await axios.get('https://api.github.com/users/alexandre-roque/repos');

        return response.data;
    });


    return (
        <ul>
            { isFetching && <p>Carregando...</p> }
            { data?.map(repo => {
                return (
                    <li key={repo.full_name}>
                        <strong>{repo.full_name}</strong>
                        <p>{repo.description}</p>
                    </li>
                )
            })}
        </ul>
    )
};

export default RepositoryList;