import React from 'react';
import Layout, { GradientBackground } from '../../components/Layout';
import { useState, useEffect } from 'react';
import { singleBlog, listRelated } from '../../actions/blog';
import { API } from '../../config';
import SmallCard from '../../components/blog/SmallCard';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import SEO from '../../components/SEO';
import Footer from '../../components/Footer';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SingleBlog = ({ blog }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const [related, setRelated] = useState([]);

  const loadRelated = () => {
    listRelated({ blog }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRelated(data);
        console.log(data);
      }
    });
  };

  useEffect(() => {
    loadRelated();
  }, []);

  const showRelatedBlog = () => {
    return (
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {related.map((blog, i) => (
          <div className="w-200 col-md-4" key={i}>
            <SmallCard blog={blog} />
          </div>
        ))}
      </Carousel>
    );
  };

  // // Will use in the future
  // const showBlogCategories = (blog) =>
  //   blog.categories.map((c, i) => (
  //     <Link key={i} href={`/categories/${c.slug}`}>
  //       <a className="btn btn-primary mr-1 ml-1 mt-3 bg-blue-300 px-6 rounded-md">
  //         {c.name}
  //       </a>
  //     </Link>
  //   ));

  // const showBlogTags = (blog) =>
  //   blog.tags.map((t, i) => (
  //     <Link key={i} href={`/tags/${t.slug}`}>
  //       <a className="btn btn-outline-primary mr-1 ml-1 mt-3 bg-orange-300 px-6 rounded-md">
  //         {t.name}
  //       </a>
  //     </Link>
  //   ));

  // const showComments = () => {
  //   return (
  //     <div>
  //       <DisqusThread
  //         id={blog.id}
  //         title={blog.title}
  //         path={`/blog/${blog.slug}`}
  //       />
  //     </div>
  //   );
  // };

  // const showAuthor = () => {
  //   <article className="prose">
  //     <p className="lead mt-3 mark dark:text-white text-black">
  //       Written by:&nbsp;
  //       <Link href={`/profile/${blog.postedBy.username}`}>
  //         <a className="text-blue-300 no-underline">{blog.postedBy.username}</a>
  //       </Link>
  //       | Published {moment(blog.updatedAt).fromNow()}
  //     </p>
  //   </article>;
  // };

  return (
    <Layout>
      <SEO title={blog.title} />
      <Navbar />
      <SearchBar />
      <main className="w-full mt-8">
        <div>
          <h1 className="text-center font-medium leading-tight text-5xl mt-0 mb-2 dark:text-white text-black">
            {blog.title}
          </h1>
          <div className="container">
            <img
              src={`${API}/blog/photo/${blog.slug}`}
              alt={blog.title}
              className="img img-fluid rounded-lg featured-image object-cover h-96 w-full"
            />

            {/* 
            Will use in the future
            <div>
              {showAuthor()}
              <br />
              {showBlogCategories(blog)}
              <br />
              {showBlogTags(blog)}
              <br/>
              {showComments()}
            </div> */}
          </div>
        </div>

        <article class="prose dark:prose-invert max-w-none prose-lg">
          <div dangerouslySetInnerHTML={{ __html: blog.body }} />
        </article>

        <div className="container">
          <h4 className="text-center pt-5 pb-5 h2">Related blogs</h4>
          <div>{showRelatedBlog()}</div>
        </div>
      </main>
      <Footer copyrightText="Rgeen.com" />
      <GradientBackground
        variant="small"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
    </Layout>
  );
};

SingleBlog.getInitialProps = ({ query }) => {
  return singleBlog(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { blog: data, query };
    }
  });
};

export default SingleBlog;
