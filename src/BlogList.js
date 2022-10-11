import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch'

const BlogList = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { data: blog, isPending, error } = useFetch('https://forjessicasake.github.io/users/db.json/' + id)


    const handleDelete = () => {
        fetch('https://forjessicasake.github.io/users/db.json/' + blog.id, {
            method: "DELETE"
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <section className="blogs">

            {isPending && <div className='pending'> Loading...</div>}
            {error && <p className='error'>{error}</p>}
            {blog && (

                <section className="blog-preview" key={blog.id}>
                    <h2 className='blog-title'>{blog.username}</h2>
                    <p className='blog-body'>{blog.email}</p>
                    <h4 className='blog-author'>{blog.name}</h4>
                    <button className="delete-btn" onClick={handleDelete}>Delete Blog</button>
                </section>)

            }

        </section>
    )
}

export default BlogList
