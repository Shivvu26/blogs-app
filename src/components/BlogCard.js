const PostCards = () => {

    const data = [{
        type: 'World',
        heading: 'Featured post',
        date: 'Nov 12',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        img: ''
    },
    {
        type: 'Design',
        heading: 'Post Title',
        date: 'Nov 11',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        img: ''
    }];

    return (
        <div className="row mb-2">
            {data.map((item, index) => {
                return (
                    <div key={index} className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">{item.type}</strong>
                                <h3 className="mb-0">{item.heading}</h3>
                                <div className="mb-1 text-muted">{item.date}</div>
                                <p className="card-text mb-auto">{item.text}</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default PostCards;