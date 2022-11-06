import Footer from '../components/Footer';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';

export default function AboutUs({ globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Navbar />
      <SearchBar />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            About Us
          </h1>
        </header>
        <main>
          <article className="prose dark:prose-dark">
            <p>
              Rgeen.com is the world's most-referenced price-tracking website
              for cryptoassets in the rapidly growing cryptocurrency space.
            </p>
            <p>
              Its mission is to make crypto discoverable and efficient globally
              by empowering retail users with unbiased, high quality and
              accurate information for drawing their own informed conclusions.
            </p>
            <p>
              Its mission is to make crypto discoverable and efficient globally
              by empowering retail users with unbiased, high quality and
              accurate information for drawing their own informed conclusions.
            </p>
            <br></br>
            <p>
              Founded by Kabeya Suzuki in May 2019, Rgeen.com has quickly grown
              to become the most trusted source by users, institutions, and
              media for comparing thousands of cryptoassets and is commonly
              cited by NHK, Bloomberg, and other major news outlets. (Even the
              U.S. government uses rgeen's data for research and reports!)
              Through the acquisition, rgeen plans to tap into its parent
              company's extensive resources to acquire more in-depth data into
              projects, reduce information asymmetry in the crypto industry and
              bring higher-quality data to its hundreds of millions of users.
              This move should boost demand for CryptoCompare; a tool that helps
              individuals analyze which currencies perform particularly well or
              poorly based on market trends, financial indicators like
              volatility levels versus CPI and Bitcoin Value vs. JPY values
            </p>
          </article>
        </main>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
