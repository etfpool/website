import BlogRead from '../../../components/crud/BlogRead';
import Admin from '../../../components/auth/Admin';
import SEO from '../../../components/SEO';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Layout, { GradientBackground } from '../../../components/Layout';

const Blog = () => {
  return (
    <Layout>
      <SEO title={'Rgeen.com'} description={'hung'} />
      <Navbar />
      <Admin>
        <div className="container">
          <div className="row">
            <div className="text-center col-md-12 pt-5 pb-5">
              <h2>Manage blogs</h2>
            </div>
            <div className="col-md-12">
              <BlogRead />
            </div>
          </div>
        </div>
      </Admin>
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

export default Blog;
