import { images } from '../helpers/images';

export const BackgroundImages = () => {
  return (
    <div className='background'>
      <img
        className='oval-img-flesh'
        src={images('./oval-flesh.png')}
        alt='oval-flesh'
        title='oval-flesh'
      />
      <img
        className='oval-img-green'
        src={images('./oval-green.png')}
        alt='oval-green'
        title='oval-green'
      />
      <img
        className='oval-img-orange'
        src={images('./oval-orange.png')}
        alt='oval-orange'
        title='oval-orange'
      />
      <img
        className='oval-img-flesh-2'
        src={images('./oval-flesh.png')}
        alt='oval-flesh-2'
        title='oval-flesh-2'
      />
    </div>
  );
};
