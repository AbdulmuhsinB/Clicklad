// app/page.js
import Layout from '../app/layout';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/InformationSection'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <Layout>
        <Navbar />
        <Hero />
        <Info />
        <Footer/>
    </Layout>
  );
}
