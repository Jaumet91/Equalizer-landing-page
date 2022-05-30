import { BackgroundImages } from './components/BackgroundImages';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Section } from './components/Section';

import './styles/style.css';

export const Landing = () => {
  return (
    <div id='container'>
      <BackgroundImages />
      <Header />
      <Section />
      <Footer />
    </div>
  );
};
