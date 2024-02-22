import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div className='flex gap-5'>
      <div>
        <div>
          <Button primary onClick={handleClick} className='mb-5'>
            <GoBell />
            Click me!
          </Button>
        </div>
        <div>
          <Button secondary onClick={handleClick} className='mb-5'>
            <GoBell />
            Click me!
          </Button>
        </div>
        <div>
          <Button success onClick={handleClick} className='mb-5'>
            <GoBell />
            Click me!
          </Button>
        </div>
        <div>
          <Button warning onClick={handleClick} className='mb-5'>
            <GoBell />
            Click me!
          </Button>
        </div>
        <div>
          <Button danger onClick={handleClick} className='mb-5'>
            <GoBell />
            Click me!
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button primary outlined onClick={handleClick} className='mb-5'>
            <GoDatabase />
            Click me!
          </Button>
        </div>
        <div>
          <Button secondary outlined onClick={handleClick} className='mb-5'>
            <GoDatabase />
            Click me!
          </Button>
        </div>
        <div>
          <Button success outlined onClick={handleClick} className='mb-5'>
            <GoDatabase />
            Click me!
          </Button>
        </div>
        <div>
          <Button warning outlined onClick={handleClick} className='mb-5'>
            <GoDatabase />
            Click me!
          </Button>
        </div>
        <div>
          <Button danger outlined onClick={handleClick} className='mb-5'>
            <GoDatabase />
            Click me!
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button primary rounded onClick={handleClick} className='mb-5'>
            <GoCloudDownload />
            Click me!
          </Button>
        </div>
        <div>
          <Button secondary rounded onClick={handleClick} className='mb-5'>
            <GoCloudDownload />
            Click me!
          </Button>
        </div>
        <div>
          <Button success rounded onClick={handleClick} className='mb-5'>
            <GoCloudDownload />
            Click me!
          </Button>
        </div>
        <div>
          <Button warning rounded onClick={handleClick} className='mb-5'>
            <GoCloudDownload />
            Click me!
          </Button>
        </div>
        <div>
          <Button danger rounded onClick={handleClick} className='mb-5'>
            <GoCloudDownload />
            Click me!
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button
            primary
            rounded
            outlined
            onClick={handleClick}
            className='mb-5'
          >
            <GoBell />
            Click me!
          </Button>
        </div>
        <div>
          <Button
            secondary
            rounded
            outlined
            onClick={handleClick}
            className='mb-5'
          >
            <GoBell /> Click me!
          </Button>
        </div>
        <div>
          <Button
            success
            outlined
            rounded
            onClick={handleClick}
            className='mb-5'
          >
            <GoBell /> Click me!
          </Button>
        </div>
        <div>
          <Button
            warning
            rounded
            outlined
            onClick={handleClick}
            className='mb-5'
          >
            <GoBell />
            Click me!
          </Button>
        </div>
        <div>
          <Button
            danger
            rounded
            outlined
            onClick={handleClick}
            className='mb-5'
          >
            <GoBell />
            Click me!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;
