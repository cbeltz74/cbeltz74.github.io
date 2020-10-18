import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Nav from '../components/Nav';

export default function HomePage() {
  return (
    <Layout>
      <Nav />
      <p>Hey! I'm the home page!</p>
      <Footer />
    </Layout>
  );
}
