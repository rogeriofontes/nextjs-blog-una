import useSWR from 'swr';
import CustomLink from "../../src/components/CustomLink";

const url = 'https://jsonplaceholder.typicode.com/posts'
//const usl = "api/staticdata"
//const fetcher = (url) => fetch(url).then((res) => res.json());
const fetcher = (...args) => fetch(...args).then((res) => res.json())

function BlogPage() {
    //Set up SWR to run the fetcher function when calling "/api/staticdata"
    //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
    //const { data, error } = useSWR("../../api/staticdata", fetcher);
    const { data, error } = useSWR(url, fetcher)

    //Handle the error state
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div>Loading...</div>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    //href={{pathname: "/blog", query: { id: item.id}}}

    return (
        <div>
            <h1>Blog</h1>
            <CustomLink href="/">
                Voltar para Home
            </CustomLink>
            
            {data &&
                data?.map((item) => (
                    <ul>
                        <li><CustomLink href={`/blog/${item.id}`}><b>Id:</b> {item.userId}</CustomLink></li>
                        <li><b>Name:</b> {item.title}</li>
                        <li><b>Language:</b> {item.body}</li>
                    </ul>
                ))}

        </div>
    );
}

export default BlogPage;