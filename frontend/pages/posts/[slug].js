import React from 'react';
import Link from 'next/link';
import Layout, { GradientBackground } from '../../components/Layout';
import { useState, useEffect } from 'react';
import { singleBlog, listRelated } from '../../actions/blog';
import { API } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import SmallCard from '../../components/blog/SmallCard';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import SEO from '../../components/SEO';
import ThemeSwithcher from '../../components/ThemeSwitcher';
import Footer from '../../components/Footer';
// import DisqusThread from '../../components/DisqusThread';

const SingleBlog = ({ blog, query }) => {
  const [related, setRelated] = useState([]);

  const loadRelated = () => {
    console.log(blog);
    listRelated({ blog }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRelated(data);
      }
    });
  };

  useEffect(() => {
    loadRelated();
  }, []);

  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="btn btn-primary mr-1 ml-1 mt-3 bg-blue-300 px-6 rounded-md">
          {c.name}
        </a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-outline-primary mr-1 ml-1 mt-3 bg-orange-300 px-6 rounded-md">
          {t.name}
        </a>
      </Link>
    ));

  const showRelatedBlog = () => {
    return related.map((blog, i) => (
      <div className="w-200 col-md-4" key={i}>
        <SmallCard blog={blog} />
      </div>
    ));
  };

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

            {/* <article className="prose">
              <p className="lead mt-3 mark dark:text-white text-black">
                Written by:&nbsp;
                <Link href={`/profile/${blog.postedBy.username}`}>
                  <a className="text-blue-300 no-underline">
                    {blog.postedBy.username}
                  </a>
                </Link>
                | Published {moment(blog.updatedAt).fromNow()}
              </p>
            </article> */}

            {/* <div>
              {showBlogCategories(blog)}
              <br />
              {showBlogTags(blog)}
            </div> */}
          </div>
        </div>

        <article className="prose-base dark:prose-invert">
          <div className="container">
            <section>
              <div className="col-md-12 lead dark:text-white text-black">
                {renderHTML(blog.body)}
              </div>
            </section>
          </div>
        </article>

        <div className="container">
          <h4 className="text-center pt-5 pb-5 h2">Related blogs</h4>
          <div className="flex flex-swap row">{showRelatedBlog()}</div>
        </div>

        {/* <div className="container pt-5 pb-5">{showComments()}</div> */}
      </main>
      <Footer copyrightText="Rgeen.com" />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
};

SingleBlog.getInitialProps = ({ query }) => {
  return singleBlog(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
      return { blog: data, query };
    }
  });
};

export default SingleBlog;
