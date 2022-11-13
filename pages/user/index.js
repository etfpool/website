import Private from '../../components/auth/Private';
import Link from 'next/link';
import SEO from '../../components/SEO';

import Footer from '../../components/Footer';
import Layout, { GradientBackground } from '../../components/Layout';
import Navbar from '../../components/Navbar';
import ThemeSwitcher from '../../components/ThemeSwitcher';

const UserIndex = () => {
  return (
    <Layout>
      <SEO title={'Rgeen.com'} description={'hung'} />
      <Navbar />
      <Private>
        <div className="container-fluid m-40">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5">
              <h2>User Dashboard</h2>
            </div>
            <div className="col-md-4">
              <ul className="list-group">
                <li className="list-group-item">
                  <Link href="/user/crud/blog">
                    <a>Create Blog</a>
                  </Link>
                </li>

                <li className="list-group-item">
                  <Link href="/user/crud/blogs">
                    <a>Update/Delete Blog</a>
                  </Link>
                </li>

                <li className="list-group-item">
                  <Link href="/user/update">
                    <a>Update profile</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-8">right</div>
          </div>
        </div>
      </Private>
      <ThemeSwitcher />
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

export default UserIndex;
