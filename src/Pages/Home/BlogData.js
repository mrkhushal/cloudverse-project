import React from 'react';

const Blogs = () => {
    const blogData = [
        {
            id: 1,
            title: 'First Blog Post',
            content: 'This is the content of the first blog post.',
            imageUrl: process.env.PUBLIC_URL + '/assets/images/blog.svg',
            link: '/'
        },
        {
            id: 2,
            title: 'Second Blog Post',
            content: 'This is the content of the second blog post.',
            imageUrl: process.env.PUBLIC_URL + '/assets/images/blog.svg',
            link: '/'
        },
        {
            id: 3,
            title: 'third Blog Post',
            content: 'This is the content of the third blog post.',
            imageUrl: process.env.PUBLIC_URL + '/assets/images/blog.svg',
            link: '/'
        },
        {
            id: 4,
            title: 'forth Blog Post',
            content: 'This is the content of the forth blog post.',
            imageUrl: process.env.PUBLIC_URL + '/assets/images/blog.svg',
            link: '/'
        },
        // Add more blog posts as needed
    ];

    return (
<>
{blogData.map((post) => (
                <div className="blog" key={post.id}>
                    <img src={post.imageUrl} alt="" className='b-img' />
                    <div className="b-body">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <a href={post.link}>Read More</a>
                    </div>
                </div>
            ))}
</>
    );
};

export default Blogs;
