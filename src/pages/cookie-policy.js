import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Legal from '../components/Legal';
import SEO from '../components/SEO';
import OGImage from '../sorted.png';

const PrivacyPolicy = () => (
  <Layout>
    <SEO
      title="Cookie Policy - Sorted Property Services"
      img={OGImage}
      description="The Sorted workforce is comprised of professional and highly-skilled individuals, fully equipped and qualified to deal with your needs, wants and frustrations as a property manager. Friendly and always happy to help, each operative is accredited in their field of expertise and guaranteed to get the job done to outstanding standards in your property."
    />
    <Legal title="Cookie Policy">
      <p>
        Last updated:<span> November 2020</span>
      </p>

      <div>
        <h2>1: What are cookies?</h2>
        <p>
          As is common practice with almost all professional websites this site
          uses cookies, which are tiny files that are downloaded to your
          computer, to improve your experience. This page describes what
          information they gather, how we use it and why we sometimes need to
          store these cookies. We will also share how you can prevent these
          cookies from being stored however this may downgrade or 'break'
          certain elements of the sites functionality.
        </p>
      </div>
      <div>
        <h2>2: How we use cookies?</h2>
        <p>
          We use cookies for a variety of reasons detailed below. Unfortunately,
          in most cases there are no industry standard options for disabling
          cookies without completely disabling the functionality and features
          they add to this site. It is recommended that you leave on all cookies
          if you are not sure whether you need them or not in case they are used
          to provide a service that you use.
        </p>
        <div>
          <h2>3. Disabling cookies?</h2>
          <p>
            You can prevent the setting of cookies by adjusting the settings on
            your browser (see your browser Help for how to do this). Be aware
            that disabling cookies will affect the functionality of this and
            many other websites that you visit. Disabling cookies will usually
            result in also disabling certain functionality and features of the
            this site. Therefore it is recommended that you do not disable
            cookies.
          </p>
        </div>
        <div>
          <h2>4. The cookies we set</h2>
          <p>
            <span>Forms related cookies</span> - When you submit data to through
            a form such as those found on contact pages or comment forms cookies
            may be set to remember your user details for future correspondence.
          </p>
          <p>
            <span>Third party cookies</span> - In some special cases we also use
            cookies provided by trusted third parties. The following section
            details which third party cookies you might encounter through this
            site.
          </p>
          <p>
            This site uses Google Analytics which is one of the most widespread
            and trusted analytics solution on the web for helping us to
            understand how you use the site and ways that we can improve your
            experience. These cookies may track things such as how long you
            spend on the site and the pages that you visit so we can continue to
            produce engaging content.
          </p>
          <p>
            For more information on Google Analytics cookies, see the official
            Google Analytics page.
          </p>
        </div>
      </div>
    </Legal>
  </Layout>
);

export default PrivacyPolicy;
