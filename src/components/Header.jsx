import { images } from '../helpers/images';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header-left'>
        <div className='logo'>
          <img width='146' src={images('./logo.svg')} alt='logo' title='logo' />
        </div>
        <h1>We make your music sound extraordinary.</h1>
        <p>
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </div>

      <div className='header-right'>
        <img
          className='bg-pattern-1'
          src={images('./bg-pattern-1.svg')}
          alt='logo'
          title='logo'
        />
      </div>
    </header>
  );
};
