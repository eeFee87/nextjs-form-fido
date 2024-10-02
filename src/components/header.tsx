import Link from 'next/link';
import { Button } from './ui/button';

export const Header = () => {
  return (
    <header className='mx-32 pt-10'>
      <h1 className='flex flex-row justify-center text-6xl font-semibold font-serif text-gray-800'>
        Fido
      </h1>
      <nav className='flex justify-end gap-6'>
        <Link href={'./'}>
          <Button
            variant={'ghost'}
            className='text-base text-gray-800 hover:text-white hover:bg-gray-800 transition-colors duration-300'
          >
            Añadir nuevo
          </Button>
        </Link>
        <Link href={'./list'}>
          <Button
            variant={'ghost'}
            className='text-base text-gray-800 hover:text-white hover:bg-gray-800 transition-colors duration-300'
          >
            Lista de animales
          </Button>
        </Link>
      </nav>
    </header>
  );
};
