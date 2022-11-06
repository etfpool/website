import Layout from '../../../components/Layout';
import Private from '../../../components/auth/Private';
import BlogCreate from '../../../components/crud/BlogCreate';
import SEO from '../../../components/SEO';
import { getGlobalData } from '../../../utils/global-data';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const Blog = ({ globalData }) => {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Navbar />
      <Private>
        <div className="container-fluid">
          <div className="row">
            <div className="text-center col-md-12 pt-5 pb-5">
              <h1>Create a new blog</h1>
            </div>
            <div className="col-md-12">
              <BlogCreate />
            </div>
          </div>
        </div>
      </Private>
      <Footer />
    </Layout>
  );
};

export function getStaticProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}

export default Blog;
