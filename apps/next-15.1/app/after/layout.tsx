import { after } from 'next/server';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  // Secondary task
  after(() => {
    console.log('after');
  });
 
  // Primary task
  return children;
}
