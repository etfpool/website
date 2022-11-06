import Link from 'next/link';
import { API } from '../config';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import { singleCategory } from '../actions/category';
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout, { GradientBackground } from '../components/Layout';

const PlayToEarn = ({ blogs, globalData }) => {
  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    // setTimeout(() => {
    //   this.setState({
    //     items: this.state.items.concat(Array.from({ length: 20 })),
    //   });
    // }, 1500);
    console.log('load more');
  };

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Navbar />
      <main className=" w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12 hidden">
          {globalData.blogTitle}
        </h1>
        <SearchBar />
        <div>
          <InfiniteScroll
            dataLength={3}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>...</h4>}
          >
            {blogs.map((blog, i) => {
              return (
                <li
                  key={i}
                  className="flex flex-col md:flex-row md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
                >
                  <img
                    className="w-auto max-h-64 m-8 object-cover md:h-auto md:w-48 rounded-lg"
                    src={`${API}/blog/photo/${blog.slug}`}
                    alt="photo"
                  />
                  <div className="flex flex-col justify-between leading-normal">
                    <Link
                      as={`/posts/${blog.slug.replace(/\.mdx?$/, '')}`}
                      href={`/posts/[slug]`}
                    >
                      <a className="h-full py-6 lg:py-10 px-6 lg:px-6 block focus:outline-none ">
                        {blog.updatedAt && (
                          <p className="uppercase mb-3 font-bold opacity-60">
                            {blog.updatedAt}
                          </p>
                        )}
                        <h2 className="text-2xl md:text-3xl">{blog.title}</h2>
                        {blog.mdesc && (
                          <p className="mt-3 text-lg opacity-60">
                            {blog.mdesc}
                          </p>
                        )}
                        <ArrowIcon className="mt-4" />
                        <button
                          type="submit"
                          className="text-white absolute right-8 bottom-2.5 md:right-8 md:bottom-8 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800"
                          onClick={() =>
                            (window.location = 'https://rgeen.com')
                          }
                        >
                          Go to Project
                        </button>
                      </a>
                    </Link>
                  </div>
                </li>
              );
            })}
          </InfiniteScroll>
        </div>
      </main>
      <Footer copyrightText={'hung'} />
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

PlayToEarn.getInitialProps = ({ query }) => {
  var globalData = getGlobalData();
  return singleCategory('play-to-earn').then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        globalData: globalData,
        category: data.category,
        blogs: data.blogs,
        query,
      };
    }
  });
};

export default PlayToEarn;
