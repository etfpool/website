import BlogUpdate from '../../../components/crud/BlogUpdate';
import Layout from '../../../components/Layout';
import Private from '../../../components/auth/Private';
import Navbar from '../../../components/Navbar';

const Blog = () => {
  return (
    <Layout>
      <Navbar />
      <Private>
        <div className="container-fluid">
          <div className="row">
            <article className="flex justify-center prose">
              <div className="text-center col-md-12 pt-5 pb-5">
                <h1>Update blog</h1>
              </div>
            </article>
            <div className="col-md-12">
              <BlogUpdate />
            </div>
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default Blog;
