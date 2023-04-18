import useSWR from 'swr';
import { useRouter } from 'next/router';
import CustomLink from "../../src/components/CustomLink";

//const usl = "api/staticdata"
//const fetcher = (url) => fetch(url).then((res) => res.json());
const fetcher = (...args) => fetch(...args).then((res) => res.json())

function BlogPageDetails() {
    // Get the router object
    const router = useRouter();
    const { id } = router.query
    // Get value from query string route param (/:postId)
    console.log(router.query.id);
    // Get value from query string (?postId=123)
    // console.log(router.c.postId);

    const url = 'https://jsonplaceholder.typicode.com/posts/' + id
    //Set up SWR to run the fetcher function when calling "/api/staticdata"
    //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
    //const { data, error } = useSWR("../../api/staticdata", fetcher);
    const { data, error } = useSWR(url, fetcher)
    console.log(data);
    //Handle the error state
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div>Loading...</div>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file

    return (
        <div>
            <h1>Blog</h1>

            <ul>
                <li><b>Id:</b> {data.userId}</li>
                <li><b>Name:</b> {data.title}</li>
                <li><b>Language:</b> {data.body}</li>
            </ul>
            
            <CustomLink href="/blog">
                 Voltar para Blog
            </CustomLink>
        </div>
    );
}

export default BlogPageDetails;