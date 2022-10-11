import Blogdata from './Blogdata';
import useFetch from './useFetch';
function Blogs() {
  
    const { data: blogs, isPending, error } = useFetch('https://forjessicasake.github.io/users/db.json')

    return (
        <section>
            {isPending  &&  <div className='pending'>Loading...</div> }
            {error && <p className='error'>{error}</p>}
            {blogs && <Blogdata blogs={blogs}/>}
        </section>

    )
}

export default Blogs;
