import { images } from '../helpers/images';

export const Section = () => {
  return (
    <main className='section'>
      <div className='div-illustration'>
        <img
          className='illustration'
          src={images('./illustration-app.png')}
          alt='illustration-app'
          title='illustration-app'
        />
      </div>

      <div className='div-bg-pattern-2'>
        <img
          className='bg-pattern-2'
          src={images('./bg-pattern-2.svg')}
          alt='bg-pattern-2'
          title='bg-pattern-2'
        />
      </div>
      <div className='div-article'>
        <section className='article'>
          <h2>Premium EQ</h2>
          <p>
            Get expert-level control with a robust equalizer, volume mixer, and
            spatial audio. Take your listening experience to a whole new level
            and access all our incredible features!
          </p>
          <div className='price'>
            <h2>$4</h2>
            <p>/ month</p>
          </div>
          <div className='buttons-container'>
            <div className='button'>
              <img
                className='icon-apple'
                src={images('./icon-apple.svg')}
                alt='icon-apple'
                title='icon-apple'
              />
              <button type='button' className='button-iOS'>
                iOS Download
              </button>
            </div>
            <div className='button'>
              <img
                className='icon-android'
                src={images('./icon-android.svg')}
                alt='icon-android'
                title='icon-android'
              />
              <button type='button' className='button-android'>
                Android Download
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
