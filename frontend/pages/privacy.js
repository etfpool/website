import Footer from '../components/Footer';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';

export default function Privacy({ globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Navbar />
      <SearchBar />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            Privacy
          </h1>
        </header>
        <main>
          <article className="prose dark:prose-dark">
            <h2>We not provide Trading service in our platform</h2>
            <p>
              This Privacy Policy (“Privacy Policy”) covers your access and use
              of this Website, rgeen.com (the “Website”), as well as associated
              content, software, and mobile applications (collectively, the
              “Service”). This Privacy Policy explains when and why and how we
              collect and use personal information about people who visit our
              Website or use our Services, the conditions under which we may
              disclose your personal information to others, and how we keep your
              personal information secure. We may change this Privacy Policy
              from time to time so please check this page occasionally to ensure
              that you are happy with any changes. By using our Website or our
              Services, you are agreeing to be bound by this Privacy Policy.
            </p>
            <h2>What Information Do We Collect?</h2>
            <p>
              Rgeen.com (“Rgeen.com”, “we” or “us”) collects (a) the e-mail
              addresses of those who communicate with us via email; (b)
              aggregate information concerning what pages users access or visit
              (c) information given by the user (such as survey information
              and/or site registrations) (d) information related to your use of
              the Website and/or the mobile application, including IP address,
              Device ID, geographic location, and date and time of your request
              (e) any other information that you might provide voluntarily. We
              might also collect your email address and your Wallet ID if you
              decide to participate to one of our campaigns.
            </p>
            <h2>How Do We Use the Information?</h2>
            <p>
              To fulfill a contract or take steps linked to a contract such as
              processing your registration on our Website or sending you
              information about changes to our terms or policies Where it is
              necessary for purposes which are in rgeen’s legitimate interests
              such as (a) to provide the information or content you have
              requested; (b) to contact you about our programs, products,
              features or services; (c) to improve our services and for internal
              business purposes such as identification and authentication or
              customer service, portfolio tracking and user preference syncing
              between devices; (d) to ensure the security of our Website, by
              trying to prevent unauthorized or malicious activities; (e) to
              enforce compliance with our Terms of Use and other policies; (f)
              to help other organizations (such as copyright owners) to enforce
              their rights; and (g) to tailor content, advertisements, and
              offers for you or for other purposes disclosed at the time of
              collection. If you do not wish to receive marketing information
              about our programs, products, features or services, you can
              opt-out of marketing communications. Where you give us consent,
              such as (a) where you ask us to send marketing information to you
              via a medium where we need your consent, including alerts via
              mobile push notifications; (b) where you give us consent to place
              cookies and to use similar technologies; and (c) on other
              occasions where we ask you for consent, for any other purpose that
              might arise. Where we are legally required to do so. We may also
              provide access to your personally identifiable information when
              legally required to do so, to cooperate with police investigations
              or other legal proceedings, to protect against misuse or
              unauthorized use of our Website, to limit our legal liability and
              protect our rights, or to protect the rights, property or safety
              of visitors of the Website or the public. In those instances, the
              information is provided only for that purpose. Retention of Your
              Personal Information We retain information as long as it is
              necessary to provide the Services requested by you and others,
              subject to any legal obligations to further retain such
              information. Information associated with your account will
              generally be kept until it is no longer necessary to provide the
              Services or until you ask us to delete it or your account is
              deleted, whichever comes first. Additionally, we may retain
              information from deleted accounts to comply with the law, prevent
              fraud, resolve disputes, troubleshoot problems, assist with
              investigations, enforce the Terms of Use, and take other actions
              permitted by law. The information we retain will be handled in
              accordance with this Privacy Policy.
            </p>
            <h2>Questions</h2>
            <p>
              Any questions about this Privacy Policy should be addressed to
              this E-mail Address: Admin@rgeen.com.
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
