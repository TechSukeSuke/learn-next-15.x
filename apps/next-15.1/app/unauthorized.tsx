import Link from 'next/link';
 
export default function Unauthorized() {
  return (
    <div>
      <h2>Unauthorized</h2>
      <p>You are not authorized to access this resource.</p>
      <Link href="/unauthorized">Return Home</Link>
    </div>
  );
}